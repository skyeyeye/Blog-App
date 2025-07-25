//import mongoose
const mongoose = require("mongoose");

//IMPORT ROUTE HANDLERS

const postSchema = new mongoose.Schema({
   title:{
    type:String,
    required:true
   },
   body:{
    type:String,
    required:true
   },
   likes:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Like"
   }],
   comments:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Comment"
   }]
})



//Export
module.exports = mongoose.model("Post",postSchema);