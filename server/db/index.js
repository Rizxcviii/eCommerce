const mongoose = require("mongoose")
const dburl = process.env.DB_CONNECTION_URL;
mongoose.connect(dburl, (error)=>{
    error ? console.log("Error connecting to Mongo: ", error) :
    console.log("Mongo connection successfull.")
})