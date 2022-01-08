var btnTranslate = document.querySelector("#translate-button");

var inputText = document.querySelector("#translate-input")

//var serverURL="ttps://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/pirate.json"
var outputDiv = document.querySelector("#translate-output");

function constructURL(text){
    return serverURL+"?text="+text;
}

function errorHandler(error){
    console.log("error occured", error);
    alert("some error occured");
}

function transalateAction(){
    text = inputText.value;
    fetch(constructURL(text))
        .then(response=> response.json())
        .then(json => outputDiv.innerText = json.contents.translated)
        .catch(errorHandler);
}
btnTranslate.addEventListener("click", transalateAction);