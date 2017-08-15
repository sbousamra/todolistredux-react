const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const lodash = require('lodash');

const app = express();
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, '..', 'dist')));
app.use(bodyParser.json())

var database = {tokens: {}}

function randId() {
  return Math.random().toString(36).substr(2, 10);
}

function addUser(username, password) {
  lodash.extend(database, {
    [username]: {
      password: password,
      twitterData: {
        tweets: {},
        following: {},
        followers: {}
      }
    }
  })
}

function verifyUser(username, password) {
  return (!lodash.isEmpty(database) && database.hasOwnProperty(username) && database[username].password === password)
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
  if (database.hasOwnProperty(req.body.username)) {
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
    console.log(database)
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