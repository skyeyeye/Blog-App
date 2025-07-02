//1 comment kya hai
//2 comment kisne kiya hai
//3 comment kaun si post pe kiya hai
const mongoose = require("mongoose");


//Route Handler
const commentSchema = new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Post" ,//reference to the Post Model
        required:true
    },
    user:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        required:true
    },
})




//Export
module.exports = mongoose.model("Comment",commentSchema);