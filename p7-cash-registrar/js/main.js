var billAmount = document.querySelector("#billAmount");
var cashGiven = document.querySelector("#cashGiven");
var btnCheck = document.querySelector("#btn-check");
var deno = document.querySelectorAll(".deno")
var errorMessage = document.querySelector("#error-message")
const notes = [2000, 500, 100, 20, 10, 5, 1]


function errorLog(msg){
    errorMessage.innerHTML = msg
}

btnCheck.addEventListener("click", ()=>{
    errorLog("");

    //pre-check on cashGiven and billAmount
    var amount = billAmount.value;
    var total = cashGiven.value;
    if(amount>0){
        var cashToReturn  = total- amount;
        if (cashToReturn > 0)
            calculateDeno(total-amount);
        else
            errorLog("total cash given > bill amount")
        
    }else{
        errorLog("bill amount > 0")
    }
})



function calculateDeno(amount){
    for(let i=0; i<notes.length; i++){
        var numNote = Math.trunc(amount/notes[i])
        amount = amount%notes[i];
        deno[i].innerHTML = numNote;
    }

}