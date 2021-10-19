const User = require('./auth-model')

const checkUsernameExists = async (req, res, next) => {
    try {
      const [user] = await User.findBy({ username: req.body.username })
      if (!user) {
        next({ status: 401, message: 'invalid credentials' })
      } else {
        req.user = user
        next()
      }
    } catch (err) {
      next(err)
    }
  }

  module.exports = {
    checkUsernameExists,
}