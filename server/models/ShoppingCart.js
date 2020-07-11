const mongoose= require('mongoose');

const schema= new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true,
   },
    items:{
        type: Array,
        default: []
    },
});

const ShoppingCart= mongoose.model("user", user_Schema);
module.exports= ShoppingCart;