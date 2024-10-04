// data=fetch('https://api.chucknorris.io/jokes/random');
// console.log(data);


//create a main event loop and uyse async await
async function getJoke(){
    try{
        result=await fetch('sclkcj'); //this will throw an error
        data=await result.json();
        return data['value'];
    }catch(error){
        console.log(error);
        return "Error occured";
    }
    
};

async function main(){
    joke=await getJoke();
    console.log(joke);
}

main();
console.log("Hello");

