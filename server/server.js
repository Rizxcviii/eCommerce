require('dotenv').config();
const express = require("express")
const app = express();
const dbconnection = require("./db/index")

// const Product = require("./models/Product")
// const newproduct = new Product({
//     name:"String",
//     brand:"String",
//     instock:999,
//     ratings:[
//         {
//             author:"String", 
//             summary:"String", 
//             value:"String", 
//             created:Date.now()
//         },
//     ]
// }).save(function(err) {
//     if (err) throw err;
 
//     console.log('Product successfully saved.');
// })

app.use('/products', require('./controllers/Product'));
// app.use('/users', require('./controllers/users'))

app.get("/", (req,res)=>{
    res.send("<h1>Welcome!</h1>")
})

app.listen(5000, ()=>{
    console.log("Server listening to 5000...")
})

