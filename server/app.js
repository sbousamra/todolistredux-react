const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const lodash = require('lodash');

const app = express();
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, '..', 'dist')));
app.use(bodyParser.json())

var database = {}

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html')); 
});

app.get('/signup', (req, res) => {
  res.status(200).send("Welcome to signup")
})

app.get('/timeline', (req, res) => {
  res.status(200).send("Here's the timeline")
})

app.post('/signup', (req, res) => {
  res.status(200).send("Successful post to signup")
})

app.post('/login', (req, res) => {
  res.status(200).send("Successful login")
})

app.post('/tweet/:id', (req, res) => {
  res.status(200).send("You've tweeted")
})

app.delete('/delete', (req, res) => {
  res.status(200).send("You've deleted")
})

var PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});