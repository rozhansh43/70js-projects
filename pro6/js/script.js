const btn = document.querySelector('button');
const search = document.querySelector('.search');
const input = document.querySelector('input');

btn.addEventListener('click',function(){
  search.classList.toggle('active')
})