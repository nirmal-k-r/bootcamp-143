//nodejs server
var http = require('http');

products=[
    {id:1,name:"pen",price:100},
    {id:2,name:"apple",price:200},
    {id:3,name:"jacket",price:300}
];


server=http.createServer(function(req,res){
    //specfic route and method
    //http://localhost:3000/hello
    if(req.url=="/hello" && req.method=="GET"){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("Hello World");
        res.end();

    // http://localhost:3000/products
    }else if(req.url=="/products" && req.method=="GET"){
        res.writeHead(200,{'Content-Type':'application/json'});
        res.write(JSON.stringify(products));
        res.end();
    
    }else if(req.url=="/products" && req.method=="POST"){
        let body="";
        req.on("data",function(chunk){
            body+=chunk;
        });
        req.on("end",function(){
            let product=JSON.parse(body);
            products.push(product);
            res.writeHead(201,{'Content-Type':'text/html'});
            res.write('Added to products');
            res.end();
        });

    }else if(req.url=="/getProduct" && req.method=="GET"){
        id=req.query.id;
        res.writeHead(200,{'Content-Type':'application/json'});
        res.write(JSON.stringify(products[id]));
        res.end();
    
    }else{
        res.writeHead(404,{'Content-Type':'text/html'});
        res.write("Not found");
        res.end();
    }   
});

var port= 3000;
server.listen(port,function(){
    console.log(`Server is running on port ${port}`);
});