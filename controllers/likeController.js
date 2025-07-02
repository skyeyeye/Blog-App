//import models
const Post = require("../models/postModel");
const Like = require("../models/likeModel");
//like post
//pehle like ka object create karophir database me push karo
exports.likePost = async (req,res) => {
    try{
       //get data
       const {post,user} = req.body;
       const like = new Like ({
        post,user
       });
       const savedLike = await like.save()
       //update post collection on basis of this
        const updatedPost = await Post.findByIdAndUpdate(post,{$push: {likes: savedLike._id}},{new:true})
                               .populate("likes") 
                               .exec()


            res.json({
                post:updatedPost
            })                   
    }
    catch(error){
           console.error("Error details:", error);
        return res.status(500).json({
            error:"error while liking post",

        });
   }
};

exports.unlikePost = async(req,res)=>{
    try{
       const {post,like} = req.body;
       //find and delete like collection se
       const deletedLike = await Like.findOneAndDelete({post:post,_id:like});
           if (!deletedLike) {
      return res.status(404).json({
        message: "Like not found",
      });
    }
       //update Post Collection
       const updatedPost = await Post.findByIdAndUpdate(post,{$pull:{likes:deletedLike._id}},{new:true})
       
        //likes ke andar deletedLike ko delete krna chahta hu
        res.json({
            message:"Entry deleted Successfully",
            post:updatedPost
        })
    }
    catch(error){
        console.error("Error details:", error);
        return res.status(500).json({
            error:"error while unliking post",

        });
    }
}