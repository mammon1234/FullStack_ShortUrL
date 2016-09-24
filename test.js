/**
 * Created by user on 9/19/16.
 */
var http = require('http');
var fs = require('fs')
http.createServer(function (req,res){

    //res.writeHead(200,{"Content-Type":"text-plain"});
    //res.writeHead(200,{"Content-Type":"text-html"});
    //res.write("Hello world,again");
    //res.end();
    //var html = fs.readFileSync(__dirname +"/index.html");
    //res.end(html);
    console.log("hello");
    if(req.url === "/"){
        console.log("hi");
        res.writeHead(200,{"Content-Type":"text-html"});
        var html = fs.readFileSync(__dirname +"/index.html");
        res.end(html);
    }
    if(req.url === "/api"){
        console.log("api");
        res.writeHead(200,{"Content-Type":"application/json"});
        var obj = {
            name :"Jake Wang",
            age  : 12
        };
        res.end(JSON.stringify(obj));
    }

}).listen(3000);