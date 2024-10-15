const http= require('http');

const server=http.createServer((req,res)=>{
    res.write('Hello World from nirmal');
    res.end();
});

port=3000;

server.listen(3000,()=>{
    console.log('Server is running on port 3000');
});