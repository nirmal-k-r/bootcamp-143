let secure_details=require('./secure_details.js');
const slugify = require("slugify");


const path=require('path');

// console.log(`Your login details are: ${secure_details.email} ${secure_details.password}`);

if (secure_details.authenticate('nirmal@gmail.com','nirmal123')==true){
    console.log('Login successful');
}else{
    console.log('Login failed- Invalid credentials provided');
}

console.log(slugify("hello world", "-"));

base='/images';
filename='image1.jpg';
fullpath=path.join(base,filename);
console.log(fullpath);

current_directory=path.join(__dirname);
newpath=path.resolve(__dirname,fullpath);
console.log(newpath);