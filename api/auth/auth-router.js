const router = require("express").Router();

const { checkUsernameExists } = require("./auth-middleware");
const { JWT_SECRET } = require("./../secrets/index");
const { buildToken } = require("../tokenhandling/token-builder");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("./auth-model");

router.post("/register", (req, res, next) => {
  const { username, password, phone } = req.body;
  const hash = bcrypt.hashSync(password, 8);
  User.add({ username, password: hash, phone })
    .then((newUser) => {
      res.status(201).json(newUser);
    })
    .catch(next);
});

router.post("/login", checkUsernameExists, (req, res, next) => {
  if (bcrypt.compareSync(req.body.password, req.user.password)) {
    const token = buildToken(req.user);
    res.status(200).json({
      message: `welcome, ${req.user.username}`,
      user_id: `${req.user.user_id}`,
      token,
    });
  } else {
    next({ status: 401, message: "invalid credentials" });
  }
});

router.put("/update/:id", checkUsernameExists, async (req, res, next) => {
  const { username, password, newPassword, phone } = req.body;
  if (bcrypt.compareSync(password, req.user.password)) {
    const hash = bcrypt.hashSync(newPassword, 8);
    const updatedUser = { username, password: hash, phone };
    User.updateById(req.params.id, updatedUser)
      .then(() => {
        res.json({ message: "User password updated" });
      })
      .catch(next);
  } else {
    next({ status: 401, message: "invalid credentials" });
  }
});

module.exports = router;
