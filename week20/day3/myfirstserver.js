const http= require('http');

const server=http.createServer((req,res)=>{
    if (req.url=='/'){
        res.write('You are on the home page');
        res.end();
    }else if(req.url=='/about'){
        res.write('You are on the about page');
        res.end();
    }else if(req.url=='/contact'){
        res.write('You are on the contact page');
        res.end();
    }else if(req.url=='/new/new'){
        res.write('You are on the new new page');
        res.end();
    }
    else{
        res.writeHead(404, {
            'Content-type': 'text/html'
        })
        
        res.end("<h1>404 Page not found</h1>");
    }
});


server.listen(3000,()=>{
    console.log('Server is running on port 3000');
});