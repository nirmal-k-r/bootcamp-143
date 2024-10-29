var express = require('express');
var Product = require('../models/products');
var router = express.Router();

router.get('/test',async (req,res)=>{
    ctx={
        message: "Welcome to the products page"
    }

    res.render('test',ctx);

});

router.get('/',async (req,res)=>{
    if (req.session.user){
        user=req.session.user;
    }else{
        user=null;
    }
    products=await Product.findAll(); //retrieve all products from database 
    ctx={
        products: products, //add products to context
        user: user
    }

    res.render('products',ctx); //bind the context to the view
});


router.get('/:id',async (req,res)=>{
    id=req.params.id;
    product=await Product.findOne({
        where: {
            id: id
        }
    });
    
    ctx={
        product: product
    }

    res.render('product',ctx);
});


module.exports = router;
