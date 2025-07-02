const mongoose = require('mongoose');
require("dotenv").config();
const connectWithDb = () =>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(console.log('Connection established Successfully!'))
    .catch((err)=>{
        console.error(err);
        console.log("DB facing connection failure")
        process.exit(1); //Abnormal termination
    })
}
module.exports=connectWithDb;

