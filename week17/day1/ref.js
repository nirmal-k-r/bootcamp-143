// function increment(y){
//     y=y+1;
//     console.log("Inside function:",y);
// }

// let x=1;
// console.log(x);
// increment(x);

// console.log("After function:",x);

// function addEric(z){
//     z.push('Eric');
//     console.log("Inside function:",z);
// }

// let names=["Tom","Jerry","Spike"];

// console.log(names);
// addEric(names);
// console.log("After function:",names);



data={
    name:"TOM",
    age:30
}

// data2=data;

// console.log(data2);

// data2.name="Jerry";
// data2.age=40;

// console.log(data);


//copy object
data2=Object.assign({},data); //copy by value
data2.name="Jerry";
data2.age=40;

console.log(data);
console.log(data2);


