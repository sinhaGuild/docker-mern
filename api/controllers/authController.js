const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

const signUp = async (req, res) => {
  const { username, password } = req.body;
  try {
    const hash = await bcrypt.hash(password, 12);
    const newUser = await User.create({
      username,
      password: hash,
    });
    //save signed in user session in sessionStore
    req.session.user = newUser;

    res.status(201).json({
      status: "Successfully created a new user",
      data: { user: newUser },
    });
  } catch (error) {
    res.status(400).json({ status: "Failed", err: error });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    //if user is not found return 400
    if (!user) {
      res.status(400).json({ status: "Failed", msg: "User Not found" });
    }

    //compare incoming password hash with stored password hash
    const isCorrect = await bcrypt.compare(password, user.password);

    //if password is correct return 200 else 400.
    if (isCorrect) {
      //save the user sessionStore
      req.session.user = user;

      res.status(200).json({
        status: "Successfully Logged In.",
      });
    } else {
      res
        .status(400)
        .json({ status: "Failed", msg: "Incorrect username or password" });
    }
  } catch (error) {
    res.status(400).json({ status: "Failed", err: error });
  }
};

module.exports = {
  signUp,
  login,
};
