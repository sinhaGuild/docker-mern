const express = require("express");
const {
  getAllPosts,
  createPost,
  getSinglePost,
  updatePost,
  deletePost,
} = require("../controllers/postController");

//import middleware to check authorization
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(getAllPosts).post(protect, createPost);
router
  .route("/:id")
  .get(getSinglePost)
  .patch(protect, updatePost)
  .delete(protect, deletePost);

module.exports = router;
