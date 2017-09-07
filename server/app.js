const Repository = require('./repository')
const repository = new Repository({
  user: 'bass',
  host: 'localhost',
  database: 'twitterclone',
  password: '',
  port: 5432,
})
const middleware = require('./middleware')
const authenticate = middleware.authenticate(repository)

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, '..', 'dist')));
app.use(bodyParser.json())

app.post('/signup', (req, res) => {
  repository.doesUserExist(req.body.username).then((exists) => {
    if (exists) {
      res.status(409).send("That username already exists!")
    } else {
      repository.addUser(req.body.username, req.body.password).then(() => res.status(200).send("Welcome" + req.body.username))
    }}
  )
})

app.post('/login', (req, res) => {
  repository.verifyUser(req.body.username, req.body.password).then((verified) => {
    if (verified) {
      repository.storeToken(req.body.username).then((token) => {
        res.status(200).cookie("token", token).send("Success")
      })
    } else {
      res.status(401).send("Unsuccessful login, please make sure you correctly typed your username/password!")
    }
  })
})

app.post('/tweets', authenticate, (req, res) => {
  repository.saveTweet(req.user.username, req.body.tweet).then((res) => {
    return repository.getUserTweets(req.user.username)
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
  repository.getUserTweets(req.user.username).then((tweets) => {
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