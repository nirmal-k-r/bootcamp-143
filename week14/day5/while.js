let i=0;

while (i<5){
   console.log(i);
   i++;
}


//infinite loop
// while (true){
//     console.log('Hello world');
// }



//program to generate random numbers until total reaches 10000
total=10000;

while (total<10000){
    number=Math.floor(Math.random()*100);
    total=total+number;
    console.log("Generated number: "+number+" \t Total: "+total);
}


