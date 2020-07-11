const mongoose = require("mongoose")
const schema = new mongoose.Schema(
    {
        name:String,
        brand:String,
        instock:Number,
        ratings:[
            {
                author:String, 
                summary:String, 
                value:String, 
                created:{
                    type:Date, 
                    default:Date.now()
                }
            },
        ]
    }
);

const Product =  mongoose.model('Product', schema);
module.exports= Product;