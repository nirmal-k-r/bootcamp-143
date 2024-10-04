function division(a,b){
    return new Promise((resolve,reject)=>{
        if (b==0){
            reject("Division by zero is not allowed")
        }else{
            setTimeout(()=>{
                resolve(a/b);
            },2000)
        }
    })
}

data=division(10,3)
.then(result=>{
    console.log(result);
    return result;
})
.then(function(result){
    console.log("The quotient is ",result);
    // throw "Error occured";
})
.then(function(){
    console.log("Operation complete");
})
.catch(error=>{
    console.log(error);
})

console.log(data);

division(5,0)
.then(result=>{
    console.log(result);
})
.catch(error=>{
    console.log(error);
})


married=false;
let mypromise=new Promise(function(resolve,reject){
    if (married){
        resolve("You are married");
    }else{
        reject("You are not married");
    }
});

mypromise
.then(function(result){
    console.log(result);
})
.catch(function(result){
    console.log(result);
})
.finally(function(){
    console.log("I wish you good luck");
});

console.log(mypromise);

