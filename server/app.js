const express = require('express');
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
  pool.query("INSERT INTO users (id, username, password) VALUES($1, $2, $3)", [uuidv1(), username, password], (err, res) => {
    console.log(err, res)
  })
}

function verifyUser(username, password) {
  return (
    pool.query("SELECT COUNT(username) FROM users", (err, res) => {
      console.log(err, res)
    }) !== 0 && 
    pool.query("SELECT username FROM users WHERE EXISTS", [username], (err, res) => {
      console.log(err, res)
    }) &&
    pool.query("SELECT username FROM users WHERE EXISTS", [password], (err, res) => {
      console.log(err, res)
    })
  )
}

function storeToken(username, token) {
  lodash.extend(database.tokens, {[token]: username})
}

function authenticate(req, res, next) {
  if (!lodash.isEmpty(database.tokens) && database.tokens.hasOwnProperty(req.cookies.token)) {
    username = database.tokens[req.cookies.token]
    twitterData = database[database.tokens[req.cookies.token]].twitterData
    return next()
  } else {
    return res.status(401).send("Make an account or log in!")
  }
}

function saveTweet(tweets, tweet) {
  lodash.extend(tweets, {[randId()]: tweet})
}

function deleteTweet(tweets, tweetId) {
  updatedTweets = delete tweets[tweetId]
  lodash.set(tweets, updatedTweets)
}

app.post('/signup', (req, res) => {
  if (pool.query("SELECT COUNT(username) FROM users WHERE username = $1", [req.body.username], (err, res) => {
    console.log(err, res)
  }) > 0) {
    res.status(409).send("That username already exists!")
  } else {
    addUser(req.body.username, req.body.password)
    res.status(200).send("Welcome to Bass's Twitter!")
  }
})

app.post('/login', (req, res) => {
  var token = randId()
  if (verifyUser(req.body.username, req.body.password)) {
    res.status(200).cookie("token", token).json(database[req.body.username].twitterData)
    storeToken(req.body.username, token)
  } else {
    res.status(401).send("Unsuccessful login, please make sure you correctly typed your username/password!")
  }
})

app.post('/tweet/:id', (req, res) => {
  res.status(200).send("You've tweeted")
})

app.delete('/delete', (req, res) => {
  res.status(200).send("You've deleted")
})

app.get('/logout', (req,res) => {
  res.status(200).cookie("token", "deleting", {expires: new Date(0)}).end()
})

app.get('/timeline', authenticate, (req, res) => {
  res.status(200).json({username, twitterData})
})

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html')); 
});


var PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});