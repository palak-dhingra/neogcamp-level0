var readlineSync = require('readline-sync');
var chalk = require("chalk")
var score = 0;

var userName = chalk.keyword('orange')(readlineSync.question(("hiee, may i know your name ")));
console.log("Welcome", userName, "to the journey of magic!");
console.log("Let's begin & See what all you know! ");

function play(question, options, answer){
  question = chalk.cyan(question);

  userAnswer = readlineSync.keyInSelect(options, question)
  if(userAnswer === answer){
    console.log(chalk.green("hurray! you're right"));
    score +=1
  }else{
    console.log(chalk.red("oops! you got it wrong"));
  }
}

questions = [{
  question : "Which of these is NOT a Hogwarts House ?",
  options : ["Thunderbird", "Gryffindor", "Ravenclaw", "Hufflepuff"],
  answer : 0
},
{
  question : "What's Harry's middle name?",
  options : ["Remus", "Evan", "James", "Sirius"],
  answer : 2

},
{
  question : "Which Weasely dies during the Battle of Hogwarts?",
  options : ["George Weasley", "Arthur Weasley", "Fred Weasley", "Charlie Weasely"],
  answer : 2
},
{
  question : "Who anonymously sends Harry his father's invisibility Cloak on Christmas?",
  options : ["Albus Dumbledore", "Remus Lupin", "Siris Black", "Rubeus Hagrid"],
  answer : 0

},
{
  question : "What class does Professor McGonagall teach?",
  options : ["Muggle Studies", "Charms", "History of Magic", "Transfiguration"],
  answer : 3

},
{
  question : "What is the animal symbol of Ravenclaw?",
  options : ["Raven", "Crow", "Vulture", "Eagle"],
  answer : 3

},
{
  question : "How many horcruxes did Voldermort create intentionally ?",
  options : ["five", "six", "seven", "eight"],
  answer : 1

},
{
  question : "What is Voldermort's mother name?",
  options : ["Marvola", "Morfin", "Merope", "Morrigan"],
  answer : 2

},
{
  question : "What spell do James and Lily use to hide themselves and Harry ?",
  options : ["Informous Spell", "Memory Charm", "Invisibility Charm", "Fidelius Charm"],
  answer : 3

}
]

for(var i=0; i<questions.length; i++){
  console.log(chalk.yellow("Question", i+1))
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.options, currentQuestion.answer)
}

console.log("Yay! You SCORED", score, "/", questions.length)

top_scores = {
  name : "palak",
  score : questions.length
}

if(score >= top_scores.score){
  console.log(chalk.green("You broke the record!!!!\nSend the screenshot, so i can add your name in top scorer :)"));
}else{
  console.log("Check Out!! Top Scorer");
  console.log(chalk.green(top_scores.name, ":", top_scores.score))
}