const mongoose = require('mongoose');
const passportMongoose = require('passport-local-mongoose');

let userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

userSchema.plugin(passportMongoose);

let User = mongoose.model('User', userSchema);

module.exports = User;