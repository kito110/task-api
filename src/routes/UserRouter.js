var express=require("express");
var routes=express.Router();
var userDetail=require("/home/seema/Node_js_tutorials/src/controller/UserController.js");


routes.post("/user-create",async(req,res) => {
res.send(await userDetail.create(req.body.username,req.body.firstName,req.body.lastName,req.body.email,req.body.status,req.body.thumbnail,req.body.role,req.body.lastSigninDate,req.body.createdAt,req.body.lastModified,req.body.permissions,req.body.contact));
})

routes.get("/user-fetch",async(req,res)=>
{
    res.send(await userDetail.fetch())
})


routes.post("/user-update",async(req,res) => {
res.send(await userDetail.update(req.body._id,req.body.username,req.body.firstName,req.body.lastName,req.body.email,req.body.status,req.body.thumbnail,req.body.role,req.body.lastSigninDate,req.body.createdAt,req.body.lastModified,req.body.permissions,req.body.contact));
})


routes.post("/user-delete",async(req,res) => {
res.send(await userDetail.remove(req.body._id));
})

module.exports=routes;

