var dob = document.querySelector("#dob")
var number = document.querySelector("#input_num")
var btnCheck = document.querySelector("#check_lucky")
var result = document.querySelector("#result")

function updateResult(msg){
    result.innerHTML = msg
}

function calculateDOBSum(inputDOB){
    let sum = 0;
    inputDOB = inputDOB.replaceAll("-","")
    for(i=0; i<inputDOB.length; i++){
        sum += Number(inputDOB[i]);
    }
    return sum;
}
function checkLuckyDOB(){
    var dobValue = dob.value;
    var numValue = number.value;
    if(dobValue && numValue){
        var sumDOB = calculateDOBSum(dobValue)
        if(sumDOB % numValue === 0){
            updateResult(numValue+" is a lucky number 🍀")
        }else{
            updateResult(numValue+" is not that lucky 🥺")
        }
    }
    else{
        updateResult("enter dob & lucky number")
    }
}

btnCheck.addEventListener("click", checkLuckyDOB)