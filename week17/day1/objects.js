// let student={}; //object definition

// student.name="Tom";
// student.age=30;
// student.subjects=['english','math','science'];
// student.marks=[90,80,70];

// console.log(student);

// tom={
//     name:"Tom",
//     age:30,
//     subjects:['english','math','science'],
//     marks:[90,80,70],
//     address:{
//         street:"123 Main St",
//         city:"New York",
//         state:"NY",
//         zip:10001
//     }
// };
// console.log(tom);

// data={
//     version:1.0,
//     marks:[90,80,70],
//     average: function(){
//         let total=0;
//         for (mark of this.marks){
//             total+=mark;
//         }
//         return total/this.marks.length;
//     }
    
// }

// data['version']=3;

// console.log(data.average());

// console.log(data.version);
// console.log(data['version']);


// data="name";

// new_person={};
// new_person[data]="Tom";

// console.log(new_person);


function user(name,age,address){
    return({
        name:name,
        age:age,
        address:address
    })

}

tom=user("Tom",30,"123 Main St, New York, NY 10001");
console.log(tom);

for (key in tom){
    console.log(key);
    console.log(tom[key]); //value
}

const person = {
    name: 'Lydia',
    age: 21,
  };
  
  for (const item in person) {
    console.log(person[item]);
  }