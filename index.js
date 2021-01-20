var express = require("express");
var mongoose = require("mongoose");
require("dotenv").config();
var port = process.env.PORT;
var db_url = process.env.DB_URL;
var app = express();
var bodyParser = require('body-parser');
app.use(express.urlencoded());
app.use(bodyParser.json());

app.listen(port,async(req,res)=>
{
await mongoose.connect(db_url)
console.log(`App started at ${port}`);
});

app.use("/tasks",routes)
