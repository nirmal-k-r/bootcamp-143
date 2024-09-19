// hello();

// function hello(){
//     console.log("Hello World");
// }


// let add = function (a,b){
//     return a+b;
// }

// console.log(add(2,3));


// (function drive(){
//     console.log("Driving");
// })();


// function calculator(){
//     function addition(a,b){
//         return a+b;
//     }
//     function subtraction(a,b){
//         return a-b;
//     }
//     result=subtraction(8,5);
//     console.log(result);
// }

// calculator();

// result2=subtraction(10,2);


// function calc(){
//     function add(a,b){
//         return a+b;
//     }
//     return add;
    
// }

// // result3=calc(1,9);
// // console.log(result3);
// let addition = calc();
// console.log(addition(1,9));

// function calc(operation){
//     function add(a,b){
//         return a+b;
//     }
//     function subtract(a,b){
//         return a-b;
//     }
//     function multiply(a,b){
//         return a*b;
//     }
//     function divide(a,b){
//         return a/b;
//     }

//     if (operation =="add"){
//         return add;
//     }else if (operation=="subtract"){
//         return subtract;
//     }else if (operation=="multiply"){
//         return multiply;
//     }else if (operation=="divide"){
//         return divide;
//     }
// }

// let myAddition= calc("add");
// result=myAddition(8,3);
// console.log(result);


let add = (function () {
    let counter = 0;
    function calculus() {
        counter += 1; 
        return counter
    }
    return calculus
  })();
  
  console.log(add());
  console.log(add());
  console.log(add());