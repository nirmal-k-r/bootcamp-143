//function definition
function welcome(){
    console.log("Hi there!");
    console.log("Welcome to the session");
    console.log("Hello World");
}

num1=5;
num2=10;
console.log(num1+num2);

welcome(); //function call

console.log(num1-num2);
welcome(); 



function average(num1, num2){
    sum=num1+num2;
    avg=sum/2;
    return avg;
}

result=average(10,5);
console.log(result);


result2=average(20,10);
console.log(result2);
