const mongoose = require("mongoose");

const postSChema = mongoose.Schema({
  title: {
    type: String,
    require: [true, "Post must have a title."],
  },
  body: {
    type: String,
    required: [true, "Post must have some content."],
  },
});

const Post = mongoose.model("Post", postSChema);
module.exports = Post;
