const express = require('express');
const path=require('path');
const bodyParser=require('body-parser');
const session=require('express-session'); 

//route imports
const productRoutes=require('./routes/products');
const userRoutes=require('./routes/users');

var app = express();

app.set('view engine', 'ejs');  //set the template engine
app.set('views', path.join(__dirname, 'views')); //set the views directory

const logger=(req,res,next)=>{
    console.log('Request made to: '+req.url);
    next();
}


//middleware
app.use(logger);
app.use(express.json()); //middleware to parse json data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public'))); //serve static files


//create session for every user
app.use(session({
    secret: "chbj@^&*K£@MUHXXi2{)UXJP2",
    resave: false,
    saveUninitialized: true,
    cookie: { 
        secure: false,
        maxAge: 3600000
    }
}));

//test route
app.get('/',(req,res)=>{
    res.redirect('/products');
});

//link routes
app.use('/products',productRoutes);
app.use('/users',userRoutes);


port=3000;
app.listen(port,()=>{
    console.log('Server is running on port 3000');
});
