marks=[50,60,75,80];

console.log(marks);

// i=0
// for (mark of marks){
//     marks[i]=mark+10;
//     i++;
// }

// console.log(marks);

let newMarks = marks.map((val, index, arr) => {
    return val+20;
});
console.log(newMarks);


// [
//     {value: 10, index:0},
//     {value: 20, index:1},
//     {value: 30, index:2},
//     {value: 40, index:3},
// ]
// myArr = [10,20,30,40];
// let newArr = myArr.map((val, i, arr) => {
//   return {
//     value: val,
//     index: i
//   };
// });

// console.log(newArr);

// names=["tom","Jerry","spike"];
// console.log(names);

// newNames=names.map((val) => {
//     first_char=val[0].toUpperCase();
//     other_chars=val.slice(1);
//     return first_char+other_chars;
// });

// console.log(newNames);

let employees=[
    {
        name:"Tom",
        age:30
    },
    {
        name:"Jerry",
        age:40
    },
    {
        name:"Spike",
        age:50
    },
    {
        name:"Tyke",
        age:20
    }
];

let youngEmployees=employees.filter((emp,i,allemps) => {
    // console.log(i," : ",emp);
    return emp.age<35;
});
console.log(youngEmployees);


let items=[100,200,300,400,500];
initalValue=0;
let total=items.reduce((total,item)=>{
    return total+ item
},initalValue);
console.log(total);


let party = [
    {
      desert: 'Chocolate Mousse',
      calories: 30,
    },
    {
      desert: 'Apple Pie',
      calories: 15,
    },
    {
      desert: 'Croissant',
      calories: 50,
    },
    {
      desert: 'Strawberry Icecream',
      calories: 5,
    },
];

function reducer(totalCalories,item){
    return (item.desert != "Apple Pie") ? totalCalories + item.calories : totalCalories;
}

let totalCalories = party.reduce(reducer,0);
console.log(totalCalories);