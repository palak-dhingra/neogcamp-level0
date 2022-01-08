var sides = document.querySelectorAll(".sides")
var checkBtn = document.querySelector("#check-btn")
var output = document.querySelector("#output")

function calculateSide(a, b){
    return Math.sqrt(a*a + b*b);
}
function findHypotenuse(){
    var hypotenuse = calculateSide(Number(sides[0].value),Number(sides[1].value))
    console.log(hypotenuse)
    output.innerText = "hypotenuse = " + hypotenuse

}
checkBtn.addEventListener("click", findHypotenuse)