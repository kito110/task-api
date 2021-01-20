var mongoose = require("mongoose");

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
