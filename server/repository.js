const lodash = require('lodash');
const uuidv1 = require('uuid/v1');
const {Pool} = require('pg');

class Repository {
  constructor(db) {
    this.pool = new Pool(db)
  }

  addUser(username, password) {
    return this.pool.query("INSERT INTO users (id, username, password) VALUES($1, $2, $3)", [uuidv1(), username, password])
  }

  verifyUser(username, password) {
    return this.pool.query("SELECT COUNT(username) FROM users WHERE username = $1 AND password = $2", [username, password]).then((res) => {
      return res.rows[0].count > 0
    })
  }

  getUserWithToken(token) {
    return this.pool.query("SELECT user_id FROM tokens WHERE id = $1", [token]).then((res) => {
      return this.pool.query("SELECT username, id FROM users WHERE id = $1", [res.rows[0].user_id])
    }).then((res) => {
      return res.rows[0]
    })
  }

  storeToken(username) {
    const token = uuidv1()
    return this.pool.query("SELECT id FROM users WHERE username = $1", [username]).then((res) => {
      return this.pool.query("INSERT INTO tokens (id, user_id) VALUES($1, $2)", [token, res.rows[0].id])
    }).then((res) => {
      return token
    })
  }

  verifyToken(token) {
    return this.pool.query("SELECT COUNT(id) FROM tokens WHERE id = $1", [token]).then((res) => {
      return res.rows[0].count > 0
    })
  }

  getUserTweets(username) {
    return this.pool.query("SELECT id FROM users WHERE username = $1", [username]).then((res) => {
      return this.pool.query("SELECT * FROM tweets WHERE user_id = $1", [res.rows[0].id])
    }).then((res) => {
      return lodash.map(res.rows, (row) => {
        return row.body
      })
    })
  }

  saveTweet(username, tweet) {
    return this.pool.query("SELECT id FROM users WHERE username = $1", [username]).then((res) => {
      return this.pool.query("INSERT INTO tweets (id, user_id, body) VALUES($1, $2, $3)", [uuidv1(), res.rows[0].id, tweet])
    })
  }

  deleteTweet(tweets, tweetId) {
    updatedTweets = delete tweets[tweetId]
    lodash.set(tweets, updatedTweets)
  }

  doesUserExist(username) {
    return this.pool.query("SELECT COUNT(username) FROM users WHERE username = $1", [username]).then((res) => {
      return res.rows[0].count > 0
    })
  }
}

module.exports = Repository