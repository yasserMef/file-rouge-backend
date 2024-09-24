const express = require("express");
const router = express.Router();
const {addPost , getPosts , getOnePost , deletePost , updatePost } = require("../controller/offerInfoController")
const {connect} = require("../middleware/authMiddleware")

router.route("/").post(connect , addPost).get(getPosts)
router.route("/:id").get(getOnePost).delete(deletePost).put(updatePost)

module.exports =  router;
