var mongoose = require("mongoose");

var thingSchema = mongoose.Schema({
    name: String,
    image: String,
    description: String,
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }],
    author: {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      username: String,
    }
});

module.exports = mongoose.model("Thing", thingSchema);