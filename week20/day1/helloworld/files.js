let fs= require('fs');
let path=require('path');


//read a text file
fs.readFile('grocery.txt','utf8',(err,data)=>{
    if(err){
        console.log('Error reading file');
    }else{
        console.log(data);
    }
});

//write to a text file
fs.writeFile('grocery.txt','Milk, Bread, Eggs, Cheese',(err)=>{
    if(err){
        console.log('Error writing to file');
    }else{
        console.log('File written successfully');
    }
});


// delete file
// fs.unlink('grocery.txt', function (err) {
//     console.log('write operation complete.');
// });

fs.readdir('./', (err, files) => {
    if (err) {
        console.error(err)
        return
    }

    console.log('files: ', files)
})