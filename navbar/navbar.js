const hamburger= document.getElementById('hamburger');
const  pageNavigation= document.querySelector('nav')
hamburger.addEventListener('click',function(){
pageNavigation.classList.toggle('toggle');
})