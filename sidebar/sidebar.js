const hamburger= document.getElementById('hamburger');
const  pageNavigation= document.querySelector('nav');
const close= document.getElementById('close')
hamburger.addEventListener('click',function(){
pageNavigation.classList.toggle('toggle');
})
close.addEventListener('click',function(){
pageNavigation.classList.remove('toggle');
})