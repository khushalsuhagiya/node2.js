const http=require('http');
const server  = http.createServer((req,res)=>
{
    res.setHeader('content-type','text/html');
    res.end("welcome to server");
});

server.listen(2222,(err)=>
{
    if(err){
        console.log(err);
    }
    else{
        console.log('Server Started.....');
    }
});