const express = require('express');
const router = express.Router();
const passport = require('passport');

//model import
const User = require('../models/user');

// register form
router.get('/register', (req, res) => {
  res.render("register");
});

// register req
router.post("/register", (req, res) => {
  let userName = req.body.username;
  User.register(new User({
    username: userName
  }), req.body.password, (err, user) => {
    if (err) {
      console.log(err);
      req.flash('error', err.message);
      return res.redirect("/register");
    }
    passport.authenticate("local")(req, res, () => {
      req.flash('succes', "You successfully signed in");
      res.redirect("/things");
    })
  })
});

// login form
router.get('/login', (req, res) => {
  res.render("login");
});

// login req
router.post('/login', (req, res, next) => {
  req.flash('succes', "You successfully logged in. Hi!");
  next();
}, passport.authenticate('local', {
  successRedirect: '/things',
  failureRedirect: '/login'
}));

// logout request
router.get('/logout', (req, res) => {
  req.logout();
  req.flash('succes', "You logged out. Bye.");
  res.redirect('/things');
})

// Functions /////////////////////////
function isLoggedIn (req, res, next) {
  if (!req.isAuthenticated()) {
    return res.redirect("/login")
  }
  next();
}

module.exports = router;