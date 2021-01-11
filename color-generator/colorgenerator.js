const colorArray= [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const button = document.getElementById('btn');
const colorCode = document.getElementById('color__code');
let hexColor = "#";


button.addEventListener('click',function(){
    for(i=0;i<6;i++){
        let randomNumber= Math.floor(Math.random()*colorArray.length);
        hexColor+= colorArray[randomNumber];
    }
    document.body.style.backgroundColor = hexColor;
    colorCode.innerText = hexColor;
    colorCode.style.color = hexColor;
    hexColor= "#";
})