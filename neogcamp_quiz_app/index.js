var readlineSync = require("readline-sync")

var userName = readlineSync.question("Hiee!, What's your name ? ")
console.log("Welcome,", userName, "to DO YOU KNOW PALAK ? ");
console.log("------------------------------------")

var score = 0;

function play(question, answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log("right!");
    score = score + 1;
  }else{
    console.log("wrong!");
  }
  console.log("score -", score)
  console.log("------------------------------------")
}

questions = [
  {
    question : "Where do I work ? ",
    answer : "hsbc"
  },
  {
    question : "Where do I live ? ",
    answer : "delhi"
  },
  {
    question : "My favourite superhero ? ",
    answer : "doctor strange"
  },
  {
    question : "My favorite food? ",
    answer : "rajma chawal"
  },
  {
    question : "which instrument i play? ",
    answer : "keyboard"
  }
]

for (var i=0; i<questions.length; i++){
  play(questions[i].question, questions[i].answer);
}

top_scorerers = [
  {
    name : "palak",
    score : 5
  },
  {
    name : 'pulkit',
    score : 4
  }
]
console.log("YAY!!!, You SCORED - ", score);

console.log("Checkout the high scores, if you should be there ping me, and I'll update it.")
for(var i=0; i<top_scorerers.length; i++){
  console.log(top_scorerers[i].name, '-' ,top_scorerers[i].score)
}
