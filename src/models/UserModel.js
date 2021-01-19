var mongoose=require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.DB_URL,function(err){
if(err)throw err;
console.log("DB connected");
});
var userSchema=new mongoose.Schema({username : String,firstName : String,lastName : String,email : String,status : Number,thumbnail : String,role : String,lastSigninDate : Date,createdAt : Date,lastModified : Date,permissions : Array,contact : Number});
var usermodel=mongoose.model("user",userSchema,"Users");

module.exports=usermodel;
