//import Model
//comment model and post model
const Comment = require("../models/commentModel");
const Post = require("../models/postModel");

//Step -2 : Business Logic
//function create,export and write bL
exports.createComment = async(req,res)=>{
    try{
       
        //fetch data from request body
        const {post,user,comment} = req.body;
        //create comment object
        const newComment = new Comment({
            post,user,comment
        });
        //save new comment into database

        const savedComment = await newComment.save();
        
        console.log("Saved to MongoDB:", savedComment);
        // console.log("req.body = ", req.body);

        //nayi comment ki id ban gyi hogi 
        //find post and do changes in post because comment would also get added from post'
        //find post by id and add new comment to comment array

        const updatedPost = await Post.findByIdAndUpdate(post,{$push: {comments: savedComment._id}},{new:true})
                        .populate("comments")
                        .populate("likes") 
                        .exec()//isme abhi comments ki id hogi to get actual content we use populate
        //pehle post ko fetch kro by id ,after getting post then push savedcomment id into post collection so comment would also get added in post 
        //push->update operator
        //pull->delete operator
        //new:true-> after all operation return updated document
          return res.status(201).json({ post: updatedPost });
    }
    catch(error){
          console.error("Error details:", error);
        return res.status(500).json({
            error:"error while creating comment",
        });
    }
}