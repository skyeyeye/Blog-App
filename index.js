const express = require("express");
const app = express();
require("dotenv").config();
const connectWithDb = require("./config/database");
const PORT = process.env.PORT || 9000;

//MIDDLEWARE
app.use(express.json());
//import api route
const blog = require("./routes/blog");
//MOUNTING
app.use("/api/v1",blog);
//Db call to connect server witgh database
connectWithDb();

//Start Server
app.listen(PORT,()=>{
    console.log(`Server Started Successfully! at ${PORT} `);
})
//default raoute
app.get("/",(req,res)=>{
    res.send(`<h1>Hello Bajrang Bali</h1>`)
})
