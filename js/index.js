// using this file is optional
// you can also load the code snippets in using your browser's console
const main = document.getElementById('main');
 
main.addEventListener('click', function(event) {
  alert('I was clicked!');
});



const input = document.querySelector('input')
 
input.addEventListener('keydown', function(e) {
  if (e.which === 71) {
    return e.preventDefault()
  } else {
    console.log(e.which)
  }
});