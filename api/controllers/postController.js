const Post = require("../models/postModel");

const getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find({});
    res
      .status(200)
      .json({ status: "Success", data: { posts }, results: posts.length });
  } catch (error) {
    res.status(500).json({ status: "Failed", err: error });
  }
};

const getSinglePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json({ status: "Success", data: { post } });
  } catch (error) {
    res.status(500).json({ status: "Could not get post.", err: error });
  }
};

const createPost = async (req, res, next) => {
  try {
    const post = await Post.create(req.body);
    res
      .status(200)
      .json({ status: "Successfully created new post.", data: { post } });
  } catch (error) {
    res.status(500).json({ status: "New post creation Failed", err: error });
  }
};

const updatePost = async (req, res, next) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ status: "Successfully Updated.", data: { post } });
  } catch (error) {
    res.status(500).json({ status: "Update Failed", err: error });
  }
};

const deletePost = async (req, res, next) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    res.status(200).json({ status: "Successfully Deleted." });
  } catch (error) {
    res.status(500).json({ status: "Delete Failed", err: error });
  }
};

module.exports = {
  getAllPosts,
  getSinglePost,
  createPost,
  updatePost,
  deletePost,
};
