var initialPrice = document.querySelector("#initial-price")
var qtyStocks = document.querySelector("#qty-stocks")
var currentPrice = document.querySelector("#current-price")
var btnCalculate = document.querySelector("#btn-calculate")
var result = document.querySelector("#result")

function btnCalculateHandler(){
    var ip = Number(initialPrice.value)
    var qs = Number(qtyStocks.value)
    var cp = Number(currentPrice.value)

    calculateProfitLoss(ip, qs, cp)
}

function calculateProfitLoss(ip, qs, cp){

    if(ip > cp){
        // there is a loss
        loss = (ip-cp)*qs;
        lossP = ((ip-cp)/ip)*100;
        message = `Oops, the loss is ${loss} units, loss% = ${lossP}% 😓`
        color = "red"
    }else if(cp > ip){
        // gain
        gain = (cp-ip)*qs;
        gainP = ((cp-ip)/ip)*100
        message = `Yayy, the gain is ${gain} units, profit% = ${gainP}% 😍`
        color = "green"
    }else{
        // no change
        message = `successful investing is about managing risk, not avoiding it 😎`
        color = "blue"
    }

    showOutput(message, color)

}

function showOutput(message, color){
    result.innerText = message;
    result.style.color = color;
}

btnCalculate.addEventListener("click", btnCalculateHandler)