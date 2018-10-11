import axios from 'axios';
  
let Buttonhent: HTMLButtonElement = <HTMLButtonElement> document.getElementById("hent");
let hent: HTMLDivElement = <HTMLDivElement> document.getElementById("output");
  
Buttonhent.addEventListener("click", MouseEvent =>{
// Make a request for a user with a given ID
axios.get('https://jsonplaceholder.typicode.com/todos/')
.then(function (response) {
  hent.innerHTML = JSON.stringify(response.data[0].id)
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});
  })
 