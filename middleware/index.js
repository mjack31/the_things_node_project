const Thing = require('../models/thing');
const Comment = require('../models/comment');

// Middleware
let middlewareObj = {
  // Checkin if anyone is logged
  isLoggedIn: function (req, res, next) {
    if (!req.isAuthenticated()) {
      req.flash('error', 'You should be logged to do that!');
      return res.redirect("/login");
    }
    next();
  },

  // Checkin if proper user is logged - comments
  commentUserChecking: function (req, res, next) {
    if (req.isAuthenticated()) {
      Comment.findById(req.params.id_comm, (err, Comm) => {
        if (Comm) {
          if (err) {
            console.log(err);
          } else {
            if (Comm.author._id.equals(req.user._id)) {
              next();
            } else {
              req.flash('error', 'You have no permision to do that');
              res.send('back');
            };
          };
        } else {
          req.flash('error', 'Error! Cant find something');
          res.redirect('/things');
        };
      });
    } else {
      req.flash('error', 'You should be logged to do that!');
      return res.redirect('/login')
    };
  },

  // Checkin if proper user is logged - things
  thingUserChecking: function (req, res, next) {
    if (req.isAuthenticated()) {
      Thing.findById(req.params.id, (err, foundThing) => {
        if (foundThing) {
          if (err) {
            console.log(err);
          } else {
            if (foundThing.author._id.equals(req.user._id)) {
              next();
            } else {
              req.flash('error', 'You have no permision to do that');
              res.redirect("/login");
            };
          };
        } else {
          req.flash('error', 'Error! Cant find something');
          res.redirect('/things');
        };
      });
    } else {
      req.flash('error', 'You should be logged to do that!');
      return res.redirect('/login')
    };
  },
};

module.exports = middlewareObj;