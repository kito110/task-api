var mongoose = require("mongoose");
var ObjectId = mongoose.Types.ObjectId;
var userModel=require("/home/seema/Node_js_tutorials/src/model/UserModel.js");


//create user

var userCreate = async(username,firstName,lastName,email,status,thumbnail,role,lastSigninDate,createdAt,lastModified,permissions,contact) => {
await new userModel({username : username,firstName : firstName,lastName : lastName,email : email,status : status,thumbnail : thumbnail,role : role,lastSigninDate : lastSigninDate,createdAt : createdAt,lastModified : lastModified,permissions : permissions,contact : contact}).save();
return "User got created"
}


//fetchTask

var userFetch = async()=> {
return await userModel.find({})
}


//updateTask

var userUpdate = async(_id,username,firstName,lastName,email,status,thumbnail,role,lastSigninDate,createdAt,lastModified,permissions,contact) => {
await userModel.update({"_id":ObjectId(_id)},{$set:{username : username,firstName : firstName,lastName : lastName,email : email,status : status,thumbnail : thumbnail,role : role,lastSigninDate : lastSigninDate,createdAt : createdAt,lastModified : lastModified,permissions : permissions,contact : contact}},{multi:true});
return "User got updated"
}

//delete user

var userDelete = async(_id) => {
await userModel.remove({_id:ObjectId(_id)});
return "User got deleted"
}




module.exports = {create:userCreate,fetch:userFetch,update:userUpdate,remove:userDelete}




