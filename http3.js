const http=require('http');
const server  = http.createServer((req,res)=>
{
    res.setHeader('content-type','text/html');
    res.end("hello world one ");
});

server.listen(2121,(err)=>
{
    if(err){
        console.log(err);
    }
    else{
        console.log('Server Started.....');
    }
});