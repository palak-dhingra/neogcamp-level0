const quizform = document.querySelector(".quiz-form");
const checkBtn = document.querySelector("#check-btn")
var output = document.querySelector("#output")

const correctAnswers = [
    "90°",
    "right angled",
    "one right angle",
    "12, 16, 20",
    "Equilateral triangle",
    "100°",
    "30°",
    "a + b + c",
    "no",
    "45°",
];

function checkAnswers() {
    const formResults = new FormData(quizform);
    let score = 0;
    let index = 0;
    
    for (let value of formResults.values()) {
        if (value === correctAnswers[index]) {
            score = score + 1;
        }
        index = index + 1;
    }
    output.innerText = "you've scored " + score + "/" + correctAnswers.length + " 😃"


    // else{
    //     output.innerText = "all answers are required !!!"
    // }


}

checkBtn.addEventListener("click", checkAnswers)