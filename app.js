var txtInput = document.querySelector("#ip-txt");
var transBtn = document.querySelector("#btn-translate");
var txtOutput = document.querySelector("#op-txt");
var counter = document.querySelector("#counter");


var clck = 5;

var translationAPI = "https://api.funtranslations.com/translate/shakespeare.json";

function getURL(txt){
    return translationAPI + "?text=" + txt;
};

function outOfMoves(){
    alert("You're out of moves!! Only 5 are allowed :(");
    console.log("error: out of moves");
}

function noText(){
    alert("Kindly Enter some text");
    console.log("error: out of moves");
}

function errorHandler(error){
    alert("Error in fetching API or Moves Exhausted :(");
}

function clickHandler(){
    var txt = txtInput.value;
    // error of no text
    if(txt.length == 0){
        noText();
    }
    //error of moves exhausted
    else if(clck == 0){
        outOfMoves();
    }
    //API ERROR
    else{
        
        clck--; //reducing the number of moves left
        counter.textContent = "Left: " + clck;
        fetch(getURL(txt))
        .then(response => response.json())
        .then(json =>{
            var translatedTxt = json.contents.translated;
            txtOutput.textContent = translatedTxt;
            console.log(txtOutput.textContent);
        })
        .catch(errorHandler)
    }
};


transBtn.addEventListener("click", clickHandler);