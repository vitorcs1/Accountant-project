var currentNumber = document.getElementById('currentNumber');
var num_atual = 0;

function decrement(){

   num_atual -= 1;

   currentNumber.innerHTML = num_atual;

   if(num_atual<0){

    currentNumber.style.color = "red";

   }

}

function increment(){

    num_atual += 1;
 
    currentNumber.innerHTML = num_atual;

    if(num_atual >= 0){

        currentNumber.style.color = "black";

    }
 
 }