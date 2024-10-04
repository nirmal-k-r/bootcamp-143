// data=fetch('https://api.chucknorris.io/jokes/random');
// console.log(data);


//create a main event loop and uyse async await

async function getJoke(){
    result=await fetch('https://api.chucknorris.io/jokes/random');
    data=await result.json();
    return data['value'];
};


async function main(){
    for (let i=0;i<100;i++){
        joke=await getJoke();
        console.log(joke);
    }
   
}

main();
main();
main();
main();
main();
main();
main();
main();
main();
main();
