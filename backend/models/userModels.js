const mongoose = require('mongoose')
const validatore = require('validator')

const userSchema  = new mongoose.Schema({
    name:{type:String,required:[true,"Enter your Full-Name Please"],maxlength:[30,"You cannot exceed 30 character "],minlength:[3,"You Have to enter at least 3 character"]},
    email:{
        type:String,
        required:[true,"please enter Email Id "],
    },
    password:{
        type:String,
        required:[true,"Please Enter a secure PassWord... "],
        select:false
    }
});