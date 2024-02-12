
let check=document.querySelector("#js");
check.textContent=check.classList.contains("js-button") 
? console.log("The classList contains js-button")
: console.log("The classList does not contain js-button")

/* 10.d
function isToggled(){
    document.getElementById("gameId").classList.toggle("is-toggled");
}
*/

//10.e & 10.g
function isToggled(buttonId){
    var toggleId=document.querySelector('buttonId');
    if(buttonId=='gameId')
    {
        document.getElementById("gameId").classList.toggle("is-toggled");
    }
    else if(buttonId=='musicId')
    {
        untoggle();
        document.getElementById("musicId").classList.toggle("is-toggled");
    }
    else if(buttonId=='techId')
    {
        untoggle();
        document.getElementById("techId").classList.toggle("is-toggled");
    }
}

function untoggle(){
    var untoggleButton=document.querySelector('.is-toggled');
    if(untoggleButton)
    untoggleButton.classList.remove('is-toggled');
}


//10.h
var numberValue=document.querySelector("#amazonValue");
var printMessage=document.querySelector("#printErrorMessage");
function errorMessage(){
    if(parseInt(numberValue.value)<0)
    {
        document.createElement("p");
        printMessage.innerHTML="Error: cost cannot be less than $0";
    }
    else 
    printMessage.innerHTML=" ";



}



