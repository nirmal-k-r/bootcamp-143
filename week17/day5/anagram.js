function check(word1,word2){

    word1_rearranged=word1.toLowerCase().split('').sort().join('').trim();
    console.log(word1_rearranged);
    word2_rearranged=word2.toLowerCase().split('').sort().join('').trim();
    console.log(word2_rearranged);
    if (word1_rearranged==word2_rearranged){
        return true;
    }else{
        return false;
    }
};


result=check("Astronomer","Moon Starer"); // true
console.log(result);







