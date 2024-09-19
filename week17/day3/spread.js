// var marks=[100,300,400];

// [tom,jerry,spike]=marks;
// console.log(tom);

// let [a,b,c]=[5,6,7];
// console.log(c);

// let [username,password]=['tom','1234'];
// console.log(username);
// console.log(password);


// let result={
//     username:"Eric",
//     password:"12345",
//     age:30,
//     address:"123 Main St, New York, NY 10001"
// }

//exclude password suing spread operator
// let {password ,...user}=result;
// console.log(user);



// let [x,y,z]=[1,2,3];

// let [m,...others]=[5,6,7];
// console.log(m);
// console.log(others);


original=[1,2,3,4,5];
let copy=[...original];

console.log(original);
console.log(copy);


copy[0]=0;
console.log(original);
console.log(copy);


let alphabets = ["A", ..."BCD", "E"];
console.log(alphabets);

