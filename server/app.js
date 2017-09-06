const express = require('express');
const lodash = require('lodash');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const uuidv1 = require('uuid/v1');
const app = express();
const {Pool, Client} = require('pg');

app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, '..', 'dist')));
app.use(bodyParser.json())

const pool = new Pool({
  user: 'bass',
  host: 'localhost',
  database: 'twitterclone',
  password: '',
  port: 5432,
})

function addUser(username, password) {
  return pool.query("INSERT INTO users (id, username, password) VALUES($1, $2, $3)", [uuidv1(), username, password])
}

function verifyUser(username, password) {
  return pool.query("SELECT COUNT(username) FROM users WHERE username = $1 AND password = $2", [username, password]).then((res) => {
    return res.rows[0].count > 0
  })
}

function getUserWithToken(token) {
  return pool.query("SELECT user_id FROM tokens WHERE id = $1", [token]).then((res) => {
    return pool.query("SELECT username, id FROM users WHERE id = $1", [res.rows[0].user_id])
  }).then((res) => {
    return res.rows[0]
  })
}

function storeToken(username, token) {
  return pool.query("SELECT id FROM users WHERE username = $1", [username]).then((res) => {
    return pool.query("INSERT INTO tokens (id, user_id) VALUES($1, $2)", [token, res.rows[0].id])
  })
}

function verifyToken(token) {
  return pool.query("SELECT COUNT(id) FROM tokens WHERE id = $1", [token]).then((res) => {
    return res.rows[0].count > 0
  })
}

function authenticate(req, res, next) {
  verifyToken(req.cookies.token).then((exists) => {
    if (exists) {
      return getUserWithToken(req.cookies.token).then((user) => {
        req.user = user
        return next()
      })
    } else {
      return res.status(401).send("Make an account or log in!")
    }
  })
}

function getUserTweets(username) {
  return pool.query("SELECT id FROM users WHERE username = $1", [username]).then((res) => {
    return pool.query("SELECT * FROM tweets WHERE user_id = $1", [res.rows[0].id])
  }).then((res) => {
    return lodash.map(res.rows, (row) => {
      return row.body
    })
  })
}

function saveTweet(username, tweet) {
  return pool.query("SELECT id FROM users WHERE username = $1", [username]).then((res) => {
    return pool.query("INSERT INTO tweets (id, user_id, body) VALUES($1, $2, $3)", [uuidv1(), res.rows[0].id, tweet])
  })
}

function deleteTweet(tweets, tweetId) {
  updatedTweets = delete tweets[tweetId]
  lodash.set(tweets, updatedTweets)
}

function doesUserExist(username) {
  return pool.query("SELECT COUNT(username) FROM users WHERE username = $1", [username]).then((res) => {
    return res.rows[0].count > 0
  })
}

app.post('/signup', (req, res) => {
  doesUserExist(req.body.username).then((exists) => {
    if (exists) {
      res.status(409).send("That username already exists!")
    } else {
      addUser(req.body.username, req.body.password).then(() => res.send("Welcome" + req.body.username))
    }}
  )
})

app.post('/login', (req, res) => {
  var token = uuidv1()
  verifyUser(req.body.username, req.body.password).then((verified) => {
    if (verified) {
      storeToken(req.body.username, token).then((complete) => {
        res.status(200).cookie("token", token).send("Success")
      })
    } else {
      res.status(401).send("Unsuccessful login, please make sure you correctly typed your username/password!")
    }
  })
})

app.post('/tweets', authenticate, (req, res) => {
  saveTweet(req.user.username, req.body.tweet).then((res) => {
    return getUserTweets(req.user.username)
  }).then((tweets) => {
    res.status(200).json({tweets: tweets})
  })
})

app.delete('/delete', (req, res) => {
  res.status(200).send("You've deleted")
})

app.get('/logout', (req,res) => {
  res.status(200).cookie("token", "deleting", {expires: new Date(0)}).end()
})

app.get('/timeline', authenticate, (req, res) => {
  getUserTweets(req.user.username).then((tweets) => {
    res.status(200).json({username: req.user.username, id: req.user.id, tweets: tweets})
  })
})

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html')); 
});


var PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});