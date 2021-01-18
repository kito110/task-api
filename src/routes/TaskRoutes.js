var express = require("express");
var routes = express.Router();
var control = require("/home/prashanth/Pictures/task-api/src/controllers/TakController.js");
var port = process.env.PORT

routes.post("/create-task",async(req,res)=>{
    res.send(await control.create(req.body.taskcreatedAt,req.body.taskAssignedBy,req.body.taskOwner,req.body.taskPriority,req.body.taskDescription,req.body.estimatedTime,req.body.timeSpent,req.body.feedBack,req.body.ticketId))
})


routes.post("/delte-task",async(req,res)=>
{
    res.send(await control.delete(req.body._id))
})

routes.post("/update-task",async(req,res)=>
{
    res.send(await control.update(req.body._id,req.body.taskcreatedAt,req.body.taskAssignedBy,req.body.taskOwner,req.body.taskPriority,req.body.taskDescription,req.body.estimatedTime,req.body.timeSpent,req.body.feedBack,req.body.ticketId))
})

routes.get("/fetch-task",async(req,res)=>
{
    res.send(await control.fetch())
})

module.exports = routes;