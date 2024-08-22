//arrays


names = ['John','Eric','Tom','Rita','Tina'];
console.log(names);
console.log(names.length);

console.log(names[0]);

console.log(names[3]);

console.log(names[4]);
// console.log(names[5]);

names[3]='Jane';
console.log(names);

marks=[];
console.log(marks);
marks.push(50);
console.log(marks);
marks.push(60);
marks.push(70);
marks.push(80);
marks.push(90);

console.log(marks);


removed_data=marks.pop();
console.log(removed_data);
console.log(marks);


countries=['Kenya','Uganda','Tanzania','Rwanda','Burundi'];

data=countries.slice(2);
console.log(data);

data2=countries.slice(2,4);
console.log(data2);

data3=countries.join(', ');
console.log(data3);