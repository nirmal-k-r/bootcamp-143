function average(a,b){
    sum=a+b;
    avg=sum/2;
    return avg;
}

result=average(10,5);
console.log(result);

//declare it globally

function test(){
    console.log(data);

    let b=20; //local variable
    console.log(b);
}

var data=10;//global variable


test();
console.log(b);