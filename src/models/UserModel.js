var mongoose=require("mongoose");
require("dotenv").config();

var userSchema=new mongoose.Schema({username : String,firstName : String,lastName : String,email : String,status : Number,thumbnail : String,role : String,lastSigninDate : Date,createdAt : Date,lastModified : Date,permissions : Array,contact : Number});
var usermodel=mongoose.model("user",userSchema,"Users");

module.exports=usermodel;
