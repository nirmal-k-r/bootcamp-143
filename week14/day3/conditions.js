var choice=3;

// if(choice==1){
//     console.log('You chose 1');
// }else if(choice==2){
//     console.log('You chose 2');
// }else if
// (choice==3){
//     console.log('You chose 3');
// }else if (choice==4){
//     console.log('You chose 4');
// }else if (choice==5){
//     console.log('You chose 5');
// }else{
//     console.log('Invalid choice');
// }

switch(choice){
    case 1:
        console.log('You chose 1');
        break;
    
    case 2:
        console.log('You chose 2');
        break;
    
    case 3:
        console.log('You chose 3');
        break;
    
    case 4:
        console.log('You chose 4');
        break;
    
    case 5:
        console.log('You chose 5');
        break;
    
    default:
        console.log('Invalid choice');

};


temp=12;
humidity=50;


if (temp<15 && humidity>40){
    console.log('It is cold and humid');
}


smoke=true;
movement=false;

if (smoke==true || movement==true){
    console.log('Alarm activated');
}


age=10;

if (age>18){
    console.log('You are an adult');
}else{
    console.log('You are a minor');
}

let fruit = 'Mangoes';

switch (fruit) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log('Sorry, we are out of ' + fruit + '.');
}