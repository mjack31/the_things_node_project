// app init
const express = require('express');
const expressSession = require('express-session');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passportMongoose = require('passport-local-mongoose');
const methodOverride = require('method-override');

//routes requiries
const thingsRoutes = require('./routes/things');
const commentsRoutes = require('./routes/comments');
const authRoutes = require('./routes/auth');

// app config
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(methodOverride('_method'));
app.use(flash());

// db config
mongoose.connect('mongodb://localhost/the_things');
const User = require('./models/user');
const Thing = require('./models/thing');
const Comment = require('./models/comment');

// auth configuration
app.use(expressSession({
  secret: 'Adam jest spoko',
  resave: false,
  saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// sending user info and flash info to each site
app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  res.locals.errorMessage = req.flash('error');
  res.locals.succesMessage = req.flash('succes');
  console.log(res.locals.succesMessage);
  next();
})

// RESTful routes
// redirection to index/things
app.get('/', (req, res) => {
  res.render('landing');
});
// separated routes
app.use(thingsRoutes);
app.use(commentsRoutes);
app.use(authRoutes);

// Listener //
// Starting server
app.listen(3000, () => {
  console.log('SERVER IS ON!');
});