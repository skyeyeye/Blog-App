//1. controller ko import kar lete the
//2. Mapping krlete the route aur controller ka usse pehle route create karna hota tha -> express -> router 
const express = require("express");
const router = express.Router();


//Import Controller
const {dummyLink} = require('../controllers/dummyController')
const {createComment} = require('../controllers/CommentController');
const {createPost,getAllPosts} = require('../controllers/PostController');
const {likePost,unlikePost} = require("../controllers/LikeController");


//Mapping Create


router.get("/dummyRoute",dummyLink);
router.post("/comments/create",createComment);
router.post("/posts/create",createPost);
router.get("/getAllPosts",getAllPosts);
router.post("/likes/like",likePost);
router.post("/likes/unlike",unlikePost);
//Export
module.exports=router;