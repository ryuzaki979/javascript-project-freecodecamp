//selectors
const colorArray= ["#1f618d","#f4d03f","#1c2833","#f1f5f8","#f4d03f"];
const button = document.getElementById('btn');
const colorCode = document.getElementById('color__code');



button.addEventListener('click',function(){
    let randomNumber= Math.floor(Math.random()*colorArray.length);
    document.body.style.backgroundColor = colorArray[randomNumber];
    colorCode.innerText = colorArray[randomNumber];
    colorCode.style.color = colorArray[randomNumber]
})