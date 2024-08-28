students=['Peter', 'John', 'Mary', 'Jane', 'Alice', 'Bob', 'Doe', 'Smith', 'Tom', 'Jerry'];

console.log(students);


// console.log(students[0]);   
// console.log(students[3]);   

//iterate over each element of the array
for (student of students){
    console.log(student);   
}

//calculate average marks of students from array

marks=[70, 80, 90, 60, 85, 95];

total=0;

for (mark of marks){
    total=total+mark;
}

console.log(total/marks.length);