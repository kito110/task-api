var mongoose = require("mongoose");
var taskModel = require("./src/models/TaskModel.js")
var ObjectId = mongoose.Types.ObjectId;
var temp = "";

//createTask
var createTask = async (taskcreatedAt,taskAssignedBy,taskOwner,taskPriority,taskDescription,estimatedTime,timeSpent,feedBack,ticketId)=> {
await new taskModel ({
    taskcreatedAt :taskcreatedAt,
    taskAssignedBy:taskAssignedBy,
    taskOwner:taskOwner,
    taskPriority:taskPriority,
    taskDescription:taskDescription,
    estimatedTime:estimatedTime,
    timeSpent:timeSpent,
    feedBack:feedBack,
    ticketId:ticketId}).save();
return "Task created"
}

//deleteTask
var deleteTask = async (_id)=>{
    await taskModel.remove({"_id":ObjectId(_id)})
    return "Task deleted"
}

//updateTask
var updateTask = async(_id,taskcreatedAt,taskAssignedBy,taskOwner,taskPriority,taskDescription,estimatedTime,timeSpent,feedBack,ticketId)=> {
await taskModel.update({"_id":ObjectId(_id)}, {$set : 
   { taskcreatedAt :taskcreatedAt,
    taskAssignedBy:taskAssignedBy,
    taskOwner:taskOwner,
    taskPriority:taskPriority,
    taskDescription:taskDescription,
    estimatedTime:estimatedTime,
    timeSpent:timeSpent,
    feedBack:feedBack,
    ticketId:ticketId}},{multi:true})
return "Task updated"
}

//fetchTask
var fetchTask = async()=> {
 temp = await taskModel.find({})
    return temp.toString();
}


module.exports = {create:createTask,update:updateTask,delete:deleteTask,fetch:fetchTask}
