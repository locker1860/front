 /* 
 * @authors Your Name (you@example.org)
 * @date    2016-07-18 22:02:39
 * @version $Id$
 */

var express=require('express')
var app=express();

app.use(express.static("D:/PickUpFrontend/Projects/todo"));
app.listen(3200);
console.log("sever running port 3200");	