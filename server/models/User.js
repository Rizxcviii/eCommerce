const mongoose= require('mongoose');

const schema= new mongoose.Schema({

    username: {
     type: String,
     required: true
    },

    fname:{
       type: String,
      required: true
    },

    lname:{
       type: String,
        required:true
    },

    email: {
       type: String,
        required: true
    },

    dob: {
       type: Date,
       default: Date.now(),
        required:true
    },

    pwd: {
       type: String,
    },

    cart:{
       type: String,
    }
    
});

const User= mongoose.model("user", user_Schema);
module.exports= User;