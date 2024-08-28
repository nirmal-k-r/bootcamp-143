let names= ["john", "sarah", 23, "Rudolf",34];

for (let item of names){
    if (typeof item !== 'string'){
        continue;
    }
    first_letter=item[0];
    if (first_letter!=first_letter.toUpperCase()){
        capital_letter=first_letter.toUpperCase();
        item=item.replace(first_letter, capital_letter);
        // item[0]=capital_letter;
        // item=capital_letter+item.slice(1);
    }
    console.log(item);

}



