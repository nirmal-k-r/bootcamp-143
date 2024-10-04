// fetch('https://api.chucknorris.io/jokes/random')
// .then(response => response.json())
// .then(data => {
//     console.log(data['value']);
// });

// fetch('https://api.chucknorris.io/jokes/random')
// .then(function(response){
//     response.json()
//     .then(function(data){
//         console.log(data['value']);
//     })
// });

fetch('https://api.chucknorris.io/jokes/random')
.then(response => response.json())
.then(data => {
    console.log(data['value']);
});

// fetch('https://api.chucknorris.io/jokes/random')
// .then(response => response.json())
// .then(data => {
//     console.log(data['value']);
// })
// .catch(function(error){
//     console.log(error);
// });





//example of post request with fetch
// data={
//     method:'POST',
//     headers:{
//         'Content-Type':'application/json'
//     },
//     body:JSON.stringify({
//         "category":"dev",
//         "value": "Chucknorris stopped existing because of a black hole"
//     })
// }

// fetch('https://api.chucknorris.io/jokes/add',data)
// .then(response => response.json())
// .then(data => {
//     console.log(data);
// })
