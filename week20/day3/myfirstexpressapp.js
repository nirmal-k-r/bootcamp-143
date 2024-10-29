const express=require('express');

//create server
const server=express();

let products={
    1:{name:'apple',price:1.00},
    2:{name:'banana',price:2.00},
    3:{name:'orange',price:3.00},
    4:{name:'grapes',price:4.00},
    5:{name:'kiwi',price:5.00}
}

let names=['tom','jerry','spike','tyke','butch'];

server.use(express.json()); //middleware to parse json data

//place routes here
server.get('/',(req,res)=>{
    res.json({"API": "works"});
});

//get all products route
server.get('/products',(req,res)=>{
    res.json({products: products});
});

//get one product
server.get('/products/:id',(req,res)=>{ //id is a url parameter
    id=req.params.id;
    if(products[id]){
        res.json({products: products[id]});
    }else{
        res.json({message: "Product not found"});
    }
});

//get one name using quert parameter
server.get('/names',(req,res)=>{ //id is a url parameter
    num=req.query.num;
    if(names[num]){
        res.json({names: names[num]});
    }else{
        res.json({message: "Name not found"});
    }
});


//add one product
server.post('/products/add',(req,res)=>{
    product=req.body;
    name=req.body.name;
    price=req.body.price;

    newProduct={name:name,price:price};
    nextId=Object.keys(products).length+1;

    products[nextId]=newProduct;
    res.json({message: "Added successfully", products: products});
});

server.delete('/products/delete/:id',(req,res)=>{
    id=req.params.id;
    if(products[id]){
        delete products[id];
        res.json({message: "Deleted successfully", products: products});
    }else{
        res.json({message: "Product not found"});
    }
});

//update one product
server.patch('/products/update/:id',(req,res)=>{
    id=req.params.id;
    if(products[id]){
        product=req.body;
        name=req.body.name;
        price=req.body.price;

        products[id]={name:name,price:price};
        res.json({message: "Updated successfully", products: products});
    }else{
        res.json({message: "Product not found"});
    }
});

//get a joke
server.get('/joke',(req,res)=>{
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response=>response.json())
        .then(data=>res.json({joke: data.value}));
});


//server listens
server.listen(3000,()=>{
    console.log('Server is running on port 3000');
});