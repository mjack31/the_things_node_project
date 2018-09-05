const express = require('express');
const router = express.Router();

//model import
const Thing = require('../models/thing');
const Comment = require('../models/comment');
const middleware = require('../middleware');

// NEW route
router.get('/things/:id_comm/comment', middleware.isLoggedIn, (req, res) => {
  Thing.findById(req.params.id_comm, (err, foundThing) => {
    if (err) {
      console.log(err);
    } else {
      res.render('comments/new', {foundThing: foundThing});
    }
  });
});

// CREATE route
router.post('/things/:id_comm', middleware.isLoggedIn, (req, res) => {
  Comment.create(req.body.comment, (err, addedComment) => {
    if (err) {
      console.log(err);
    } else {
      Thing.findById(req.params.id_comm, (errThing, foundThing) => {
        if (errThing) {
          console.log(errThing);
        } else {
          let loggedUser = {
            username: req.user.username,
            _id: req.user._id,
          };
          addedComment.author = loggedUser;
          addedComment.save();
          foundThing.comments.push(addedComment);
          foundThing.save();
          req.flash('succes', "Comment added!");
          res.redirect(`/things/${req.params.id_comm}`);
        }
      });
    }
  });
});

// EDIT show route - GET
router.get('/things/:id/:id_comm/edit', middleware.commentUserChecking, (req, res) => {
  Thing.findById(req.params.id, (err, foundThing) => {
    if (err) {
      console.log(err);
    } else {
      Comment.findById(req.params.id_comm, (err, foundComm) => {
        if (err) {
          console.log(err);
        } else {

          res.render('comments/edit', {foundComm: foundComm, foundThing: foundThing});
        };
      });
    };
  });
});

// EDIT post route - PUT
router.put('/things/:id/:id_comm', middleware.commentUserChecking, (req, res) => {
  Comment.findByIdAndUpdate(req.params.id_comm, req.body.comment, (err, editedComment) => {
    if (err) {
      console.log(err);
    } else {
      req.flash('succes', "Comment edited");
      res.redirect(`/things/${req.params.id}`);
    };
  });
});

// Destroy route
router.delete('/things/:id/:id_comm', middleware.commentUserChecking, (req, res) => {
  Comment.findByIdAndRemove(req.params.id_comm, (err) => {
    req.flash('succes', "Comment deleted!");
    res.redirect(`/things/${req.params.id}`);
  });
});

module.exports = router;