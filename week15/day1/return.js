function random_number(){
    result= Math.round(Math.random()*100);
    // console.log(result);
    return result;
}

function play(){
    number=random_number();
    number=number+1;
    console.log("Your lucky number is "+ number);

    if (number<=50){
        console.log("You lose");
    }else{
        console.log("You win");
    }
}


for (let i=0; i<5; i++){
    play();
}

