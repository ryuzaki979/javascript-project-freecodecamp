const buttons = document.querySelectorAll('.btn');
const countingNumber= document.getElementById('counting-number');
let number = 0;
buttons.forEach(function(button){
    button.addEventListener("click",function(e){
        const targetClass = e.target.classList[1];
        run(targetClass);
        determineCounterColor();
    })
})
//functionality
function run(targetClass){
    if(targetClass=='increase'){
        number++;
        countingNumber.innerText= number;
        
    }
    else if(targetClass=='decrease'){
        number--;
        countingNumber.innerText= number;
    }
    else{
        number=0
        countingNumber.innerText= number;
    }
}

//determine counter color
function determineCounterColor(){
    if(number>0){
        countingNumber.style.color= "green";
    }else if(number<0){
        countingNumber.style.color= "red";
    }else{
        countingNumber.style.color= "black";
    }
}
