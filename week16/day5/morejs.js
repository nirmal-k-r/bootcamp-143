sentence="Tom is at the beach";

if (sentence.includes('Tom')){
    console.log(true);
}

sentence=sentence.replace('Tom','Ray');
console.log(sentence);

//add padding
data="^-^";
console.log(data);
data=data.padStart(8,'.');
data=data.padEnd(13,'.');

console.log(data);


sentence="   Test    ";
console.log(sentence);
sentence=sentence.trim();
console.log(sentence);



student=["Tom",[['english','math','science'],[90,80,70]],30];

let result=student.flat(2);
console.log(result);