const express = require('express');
const router = express.Router();

//model import
const Thing = require('../models/thing');
const Comment = require('../models/comment');
const middleware = require('../middleware');

// INDEX route (GET)
router.get('/things', (req, res) => {
  Thing.find({}, (err, foundedThings) => {
    if (err) {
      console.log(err);
    } else {
      res.render('things/index', {
        things: foundedThings
      });
    }
  });
});

// NEW route (GET)
router.get('/things/new', middleware.isLoggedIn, (req, res) => {
  res.render('things/new');
});

// CREATE route (POST)
router.post('/things', middleware.isLoggedIn, (req, res) => {
  Thing.create(req.body.thing, (err, newThing) => {
    if (err) {
      console.log(err);
    } else {
      let loggedUser = {
        username: req.user.username,
        _id: req.user._id,
      };
      newThing.author = loggedUser;
      newThing.save();
      console.log(newThing);
      req.flash('succes', "Congratulations, you created a new thing!");
      res.redirect('/things');
    }
  });
});

// SHOW route (GET)
router.get('/things/:id', (req, res) => {
  Thing.findById(req.params.id).populate('comments').exec((err, foundThing) => {
    if (err) {
      console.log(err);
    } else {
      res.render('things/show', {foundThing: foundThing, loggedUser: req.user});
    }
  });
});

// EDIT form route
router.get('/things/:id/edit', middleware.thingUserChecking, (req, res) => {
  Thing.findById(req.params.id, (err, foundThing) => {
    if (err) {
      console.log(err);
      req.flash('error', "UPPS. Something went wrong!");
      return res.redirect('/things');
    } else {
      res.render('things/edit', {foundThing: foundThing});
    };
  });
});

// EDIT post route
router.put('/things/:id/', middleware.thingUserChecking, (req, res) => {
  Thing.findByIdAndUpdate(req.params.id, req.body.thing, (err, updatedThing) => {
    if (err) {
      console.log(err);
      req.flash('error', "UPPS. Something went wrong!");
      return res.redirect('/things');
    } else {
      req.flash('succes', "Thing edited");
      res.redirect(`/things/${updatedThing._id}`);
    };
  });
});

// DESTROY route
router.delete('/things/:id/', middleware.thingUserChecking, (req, res) => {
  Thing.findById(req.params.id, (err, foundThing) => {
    foundThing.comments.forEach((comment) => {
      console.log(comment);
      Comment.findByIdAndRemove(comment, (err, deletedComment) => {
        if (err) {
          console.log(err);
        } else {
          console.log(deletedComment);
        };
      });
    });
  });
  Thing.findByIdAndRemove(req.params.id, (err, deletedThing) => {
    if (err) {
      req.flash('error', "UPPS. Something went wrong!");
      return res.redirect(`/things/${req.params.id}`);
    } else {
      req.flash('succes', "You deleted something!");
      res.redirect('/things');
    };
  });
});

module.exports = router;