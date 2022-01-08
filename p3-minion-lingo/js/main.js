var btnTranslate = document.querySelector("#btn-translator");
var inputText = document.querySelector("#txt-input")
var outputText = document.querySelector("#txt-output")

function createURL(text){
    // var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text="
    var url = "	https://api.funtranslations.com/translate/minion.json?text="
    url = url+text
    return url;
}

function errorHandler(error){
    alert(error);
}

function translate(text){
    fetch(createURL(text))
    .then(response => response.json())
    .then(json => {
        outputText.innerHTML = json.contents.translated;
    })
    .catch(errorHandler)
}

function translateToLingo(){
    var inputValue = inputText.value
    translate(inputValue)
}

btnTranslate.addEventListener("click", translateToLingo);