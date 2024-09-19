names=["Tom","Ray","Bob","Sam","Tim","Jim","Kim","Ben","Ron","Ken"];

// for (name of names){
//     console.log(name);
// }

// names.forEach(function (name){
//     console.log(name);
// });

// function uppercase(word){
//     console.log(word.toUpperCase());
// }

// names.forEach(uppercase);


// names.forEach(name => {
//     console.log(name);
// });

// names.forEach(function (name,index){
//     console.log(index,name);
// });

// numbers=[1,2,3,4,5,6];

// function smallNumber(num){
//     return num <= 5;
//}

// result=numbers.some(smallNumber);
// console.log(result);


// result=numbers.every(smallNumber);
// console.log(result);



const words = ["hello","hey","hola","huhu"];

// Check if all the elements of the array start with the letter 'h'


function checkH(word){
    return word[0]=='h';
}

console.log(words.every(checkH));