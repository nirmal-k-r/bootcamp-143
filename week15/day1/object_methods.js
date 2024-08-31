person={
    name:"Raj",
    dob: 1996,
    age: function(current_year){
        return current_year-this.dob;
    }
}

console.log(person.age(2024));


console.log(person.age(2016));

