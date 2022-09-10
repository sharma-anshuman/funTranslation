var txtInput = document.querySelector("#ip-txt");
var transBtn = document.querySelector("#btn-translate");
var txtOutput = document.querySelector("#op-txt");

var translationAPI = "https://api.funtranslations.com/translate/shakespeare.json";

function getURL(txt){
    return translationAPI + "?" + txt;
};

function clickHandler(){
    var txt = txtInput.value;

    fetch(getURL(txt))
    .then(response => response.json())
    .then(json =>{
        var translatedTxt = json.contents.translated;
        txtOutput.textContent = translatedTxt;
    })

};


transBtn.addEventListener("click", clickHandler);