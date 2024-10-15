const http= require('http');


products=['apple','banana','orange','grapes','kiwi'];

const server=http.createServer((req,res)=>{
    if (req.url=="/products"){
        data=JSON.stringify(products);
        res.setHeader('Content-Type','application/json');
        res.writeHead(200);
        res.end(data);
    }
});


server.listen(3000,()=>{
    console.log('API is running on port 3000');
});