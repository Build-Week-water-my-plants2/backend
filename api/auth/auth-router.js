const router = require('express').Router();

const { JWT_SECRET } = require('./../secrets/index')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('./auth-model')

router.post('/register', (req, res, next) => {
    const { username, password, phone } = req.body
    const hash = bcrypt.hashSync(password, 8)
    User.add({ username, password: hash, phone })
      .then(newUser => {
        res.status(201).json(newUser)
      })
      .catch(next)
  
});

module.exports = router;