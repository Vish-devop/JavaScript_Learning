var displayResult=document.querySelector("#result");
var calc;

function display(val){
    displayResult.value+=val;
    calc=displayResult.value;
    console.log(calc);
}

function calculate(){
    var result=eval(calc);
    displayResult.value=result;
}

function clear(){
    displayResult.value=" ";
}