// function hello(){
//     console.log("Hello World");
// }


// console.log('Starrt program');
// setTimeout(hello,5000);
// console.log('End program');


function process1(){
    console.log('process 1')
};

function process2(){
    setTimeout(function(){
        console.log('process 2');
    },5000);
};

function process3(){
    console.log('process 3');
}

function process4(){
    console.log('process 4');
}

function main(){
    process1();
    process2();
    process3();
    process4();
}

// function main(){
//    //then
//     process1()
//     .then(()=>{
//         console.log('process 1 completed');
//     })

// }

main();