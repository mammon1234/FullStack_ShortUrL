var express = require('express');
var app = express();
var restRouter = require('./routes/rest');
var redirectRouter = require('./routes/redirect');
var indexRouter = require('./routes/index');
var mongoose = require('mongoose');
var useragent = require('express-useragent');

mongoose.connect("mongodb://mammon:mammon@ds047146.mlab.com:47146/rockyluo")
//调用当地文件夹下的js文件，避免与/:shortUrl 用法冲突
app.use("/public", express.static(__dirname + "/public"));
app.use("/node_modules", express.static(__dirname + "/node_modules"));

app.use(useragent.express());
app.use("/api/v1", restRouter);

app.use("/", indexRouter);

//:代表后面跟的是变量
app.use("/:shortUrl", redirectRouter);

app.listen(3000);