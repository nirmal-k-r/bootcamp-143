citizens={
    1: {
        name: "John",
        age: 23,
        married: false
    },
    2: {
        name: "Sarah",
        age: 34,
        married: true
    },
    3: {
        name: "Rudolf",
        age: 45,
        married: true
    }
};

console.log(citizens);


function register(name, age=0, married=false){
    id=Object.keys(citizens).length+1;
    citizens[id]={
        name: name,
        age: age,
        married: married
    };
}

register("Alice", 0, false);

register("Bob", 0, false);

register('Charlie');

register('David', 50, true);
console.log(citizens);