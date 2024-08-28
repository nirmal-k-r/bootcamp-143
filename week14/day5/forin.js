marks={
    'Pierre': 70,
    'Paul': 80,
    'Jacques': 90,
    'Jean': 60,
    'Marie': 85,
    'Louise': 95
}

// console.log(marks);
// console.log(Object.keys(marks)[0]);

// console.log(marks['Pierre']);


for (student in marks){
//     console.log(student); 
//     console.log(marks[student]);
    console.log(student + " has scored "+ marks[student] + " marks");
}