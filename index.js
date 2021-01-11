var express = require("express");
require("dotenv").config();
var port = process.env.PORT;
var app = express();
var bodyParser = require('body-parser');
app.use(express.urlencoded());
app.use(bodyParser.json());

app.listen(port,function(req,res)
{
console.log(`App started at ${port}`);
});

app.use("/tasks",routes)
