var sides = document.querySelectorAll(".sides")
var checkBtn = document.querySelector("#check-btn")
var output = document.querySelector("#output")

function calculateSide(a, b, c){
    var s = (a+b+c)/2;
    return Math.sqrt(s*(s-a)*(s-b)*(s-c));
}
function calculateArea(){
    var area = calculateSide(Number(sides[0].value),Number(sides[1].value), Number(sides[2].value))
    console.log(area)
    output.innerText = "area = " + area +" sq units"

}
checkBtn.addEventListener("click", calculateArea)