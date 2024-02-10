// 10.c. 
const jsButton = document.querySelector(".js-button")
console.log(jsButton.classList.contains('js-button'))

// 10.d. 
/*
function toggleBtn(){
    const button=document.querySelector('.js-button')
    if(!button.classList.contains('is-toggled')){
        button.classList.add('is-toggled')
    }
    else{
        button.classList.remove('is-toggled')
    }
}
*/

//10.e. 
//is-toggled-> (means) ON
function toggleBtn(selector){
    const button=document.querySelector('selector')
    if(!button.classList.contains('is-toggled')){
        turnoffPreviousBtn();
        button.classList.add('is-toggled')
    }
    else{ 
        button.classList.remove('is-toggled')
    }
}
function turnoffPreviousBtn(){
    const prevBtn=document.querySelector('.is-toggled')
    if(prevBtn){
        prevBtn.classList.remove('is-toggled')
    }
}


//10.h. 
function _10h(){
    const inputElement=document.querySelector(".enterNumber")
    let cost=Number(inputElement.value)

    document.querySelector('.total-cost').innerHTML=''
    document.querySelector('.error-message').innerHTML=''

    if (cost<0){
        document.querySelector('.error-message')
        .innerHTML='Error: cost cannot be less then $0'
        return 
    }
    if(cost<40){
        cost+=40
    }
    document.querySelector('.total-cost').innerHTML=`$${cost}`
}

//10.
