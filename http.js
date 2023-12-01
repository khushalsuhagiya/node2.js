const http=require('http');

// html link
const fs = require('fs');
const { create } = require('domain');

const indext = fs.readFileSync('indext.html','utf-8');
const data = fs.readFileSync('abc.txt','utf-8');

// creat server......request//response
const server  = http.createServer((req,res)=>
{
    res.setHeader('content-type','text/html');
    res.write('hello world')
    // res.end("welcome to node");
    res.end(indext);
});

// create pot 
server.listen(2020,(err)=>
{
    if(err){
        console.log(err);
    }
    else{
        console.log('Server Started.....');
    }
});
