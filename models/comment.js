var mongoose = require("mongoose");

var commentSchema = mongoose.Schema({
    author: {
      username: String,
      _id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref:'User',
      }
    },
    text: String,
});

module.exports = mongoose.model("Comment", commentSchema);