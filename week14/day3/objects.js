//json JavaScript Object Notation => dictionary

var name='John';

var names=['John','Eric','Tom','Rita','Tina'];  


person=['John','Doe',25,'Kenya',true];

//dictionary
person={
    first_name: 'John',
    last_name:'Doe',
    age:25,
    country:'Kenya',
    married:true
}

console.log(person['first_name']);
console.log(person['married']);
console.log(person['age']);

person['age']=26;

console.log(person['age']);
console.log(person);


person={
    'name': {
        'first':'John',
        'last':'Doe'
    },
    'age':25,
    'country':'Kenya',
    'married':true
}

console.log(person['name']);
console.log(person['name']['first']);
console.log(person['name']['last']);

person['phone']='0712345678';
console.log(person);

console.log(person.phone);

delete person.phone;
console.log(person);


