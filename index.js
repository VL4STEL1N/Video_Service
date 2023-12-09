let formNode = document.querySelector('.form');
let VoitNode = document.querySelector('#Voit');

VoitNode.addEventListener('click', () => {
  formNode.classList.add('open');
}); 

console.log("Привет")