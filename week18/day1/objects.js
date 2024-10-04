//destructuring objects
// var person={
//     name:"Raj",
//     age:25,
//     address:"port louis"
// }


// // let { name: data, age , address } = person;
// // console.log(data);


// let { name, age, address, test='1' } = person;
// console.log(test);


// var person={
//     name:"Raj",
//     age:25,
//     address:"port louis",
//     hello: function(){
//         console.log("Hello");
//     }
// }

// console.log(person.name);
// person.hello();


// console.log(Object.keys(person));

// console.log(Object.values(person));

// console.log(Object.entries(person));  //get key value pair in array


// data=[
//     ["name","Tom"],
//     ["age",20],
//     ["address","curepuipe"]
// ]

// person2=Object.fromEntries(data);
// console.log(person2);


// let myObj = {
//     name : "John",
//     lastName : "Doe",
//     age : 25,
//     friends : ["Mark", "Lucie", "Ana"]
// }

// console.log("Number of keys and value",Object.keys(myObj).length);


//     for (element of Object.entries(myObj)){
//         console.log(`The key is ${element[0]} and the value is ${element[1]}`);
// }


// student={
//     name:"Tom",
//     age:20,
//     address:"curepipe",
//     marks: {
//         maths:80,
//         science:90
//     }
// }

// let {name, marks:{maths:math_mark, science: science_mark}}=student;
// console.log(name,math_mark,science_mark);


// function calculate_average({maths: math_mark, science: science_mark}){
//     // math_mark=marks.maths;
//     // science_mark=marks.science;
//     return (math_mark+science_mark)/2;
// }

// console.log(calculate_average(student.marks));


