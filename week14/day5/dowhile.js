//do while loop

total=1000;

do {
    number=Math.floor(Math.random()*100);
    total=total+number;
    console.log("Generated number: "+number+" \t Total: "+total);
} while (total<10000);


//skip iteration 5 with continue
for (let i=0; i<10; i++){
    if (i==5){
        continue;
    }
    console.log(i);
}

//break the execution of a loop

for (let i=0; i<10; i++){
    if (i==7){
        break;  //exit the loop
    }
    console.log(i);
}

