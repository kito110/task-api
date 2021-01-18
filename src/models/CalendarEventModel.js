var mongoose = require("mongoose");
require("dotenv").config();
var url = process.env.DB_URL;
mongoose.connect(url, function (err) {
    if (err) throw err;
    console.log("DB connected");
});
var calendarSchema = new mongoose.Schema({ "title": String, "participants": Object, "eventDate": Date, "type": String, "createdAt": Date });
var calendarModel = mongoose.model('calendar', calendarSchema, 'CalendarEvents');
module.exports = calendarModel;