var mongoose = require("mongoose");
require("dotenv").config();
var url = process.env.Db_URL;

mongoose.connect(url,function(err,data)
{
if(err) throw err;
console.log("db connected");
});

var taskschema = new mongoose.Schema({
taskcreatedAt: Date,
taskAssignedBy: Object,
taskOwner: Object,
taskPriority: Number,
taskDescription: String,
estimatedTime: String,
timeSpent: String,
feedBack: String,
ticketId: String
});

var taskModel = new mongoose.model("tasklist",taskSchema,"TaskLists");


module.exports = taskModel;
