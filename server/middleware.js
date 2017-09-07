const repository = require('./repository')

function authenticate(repository) {
  return (req, res, next) => {
    repository.verifyToken(req.cookies.token).then((exists) => {
      if (exists) {
        return repository.getUserWithToken(req.cookies.token).then((user) => {
          req.user = user
          return next()
        })
      } else {
        return res.status(401).send("Make an account or log in!")
      }
    })
  }
}

module.exports = {
  authenticate: authenticate,
}