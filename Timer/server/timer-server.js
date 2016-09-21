var express=require('express')
var app=express();

app.use(express.static("D:/PickUpFrontend/Projects/Timer/"));
app.listen(3200);
console.log("sever running port 3200");	