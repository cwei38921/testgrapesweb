const scriptURL="https://script.google.com/macros/s/AKfycbzKpty_Zc7CZCSjR2COC5Cd3e-5xpBCala1cg16RdxaXhdqNZ6UCy1BSZTbeKwaX-CZJQ/exec";

const form = new FormData(document.getElementById('myform'));
          
// var submit = document.getElementById('submit');
// var myform = document.getElementById('myform');
document.getElementById('five1').value = window.sessionStorage.getItem('fivenormal');
document.getElementById('twenty1').value = window.sessionStorage.getItem('twentynormal');
document.getElementById('five2').value = window.sessionStorage.getItem('fiveice');
document.getElementById('twenty2').value = window.sessionStorage.getItem('twentyice');
document.getElementById('price').value = window.sessionStorage.getItem('price');



// document.getElementById('submit').addEventListener('submit', (e) => {
//   e.preventDefault()
// })

document.getElementById('clear').addEventListener('click', () => {
  // e.preventDefault()
  fetch('http://localhost:3000/order', { method: 'get'})
    .then((response) =>  {
      alert("訂購成功");
      return response.json();
      console.log(response);
      // history.go(0);
      window.sessionStorage.clear();
    })
    .then((data)=>{
      console.log(data);
    })
    .catch(error => console.error('Error!', error.message))
})

