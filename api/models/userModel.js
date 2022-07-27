const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "Must choose a username."],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Must choose a password."],
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
