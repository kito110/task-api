var mongoose = require("mongoose");

var calendarSchema = new mongoose.Schema({ "title": String, "participants": Object, "eventDate": Date, "type": String, "createdAt": Date });
var calendarModel = mongoose.model('calendar', calendarSchema, 'CalendarEvents');
module.exports = calendarModel;
