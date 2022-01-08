var checkBtn = document.querySelector("#check-btn")
var inputAngles = document.querySelectorAll(".angles")
var output = document.querySelector("#output")

function checkTriangle(){
    var total = 0;
    for(let a=0; a< inputAngles.length; a++){
        total += Number(inputAngles[a].value)
    }

    if(total===180){
        output.innerText = "it's a triangle 🛆"
    }else{
        output.innerText = "not a traingle (sum of angles must be 180°)"
    }
}

checkBtn.addEventListener("click", checkTriangle)