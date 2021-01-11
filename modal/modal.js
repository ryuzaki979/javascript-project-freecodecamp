const open= document.getElementById('open');
const  modalNavigation= document.querySelector('.modal__overlay');
const close= document.getElementById('close')
open.addEventListener('click',function(){
modalNavigation.classList.toggle('show__modal');
})
close.addEventListener('click',function(){
modalNavigation.classList.remove('show__modal');
})