const http=require('http');
const server  = http.createServer((req,res)=>
{
    res.setHeader('content-type','text/html');
    res.end("welcome to java");
});

server.listen(8888,(err)=>
{
    if(err){
        console.log(err);
    }
    else{
        console.log('Server Started.....');
    }
});