require('dotenv').config();
const express = require("express")
const app = express();
const dbconnection = require("./db/index")

app.get("/", (req,res)=>{
    res.send("<h1>Welcome!</h1>")
})

app.listen(5000, ()=>{
    console.log("Server listening to 5000...")
})

