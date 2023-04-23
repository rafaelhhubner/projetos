// GERAL
let opçao = document.getElementsByName("jogo");
let escolha = document.querySelector("#escolha")
let jokenpo = document.querySelector("#jokenpo");
let parimpar = document.querySelector("#parimpar");
let escolher = document.querySelector("#btn-1");
let line = document.querySelector("#line");

let jogarJok = document.querySelector("#btn-2");
let jogarPar = document.querySelector("#btn-3");

let resultsJok = document.querySelector("#joken-results");
let resultsPar = document.querySelector("#parim-results");
let repetirJok = document.querySelector("#btn-4")
let repetirPar = document.querySelector("#btn-5")

let placarJok = document.querySelector("#res")
let placarPar = document.querySelector("#res-2")

escolher.addEventListener("click", function() {
    resultsJok.style.display = "none";
    resultsPar.style.display = "none";

    if (opçao[0].checked) {
        parimpar.style.display = "none";
        jokenpo.style.display = "block";
        line.style.display = "block";
    } else if (opçao[1].checked) {
        jokenpo.style.display = "none";
        parimpar.style.display = "block";
        line.style.display = "block";
    }
})

jogarJok.addEventListener("click", function() {
    repetirJok.style.display = "block"
    resultsJok.style.display = "block";
    jokenpo.style.display = "none";
    escolha.style.display = "none";
})

jogarPar.addEventListener("click", function() {
    repetirPar.style.display = "block"
    resultsPar.style.display = "block";
    parimpar.style.display = "none";
    escolha.style.display = "none";
})

repetirJok.addEventListener("click", function() {
    resultsJok.style.display = "none";
    resultsPar.style.display = "none";
    line.style.display = "none";
    escolha.style.display = "block";
})

repetirPar.addEventListener("click", function() {
    resultsJok.style.display = "none";
    resultsPar.style.display = "none";
    line.style.display = "none";
    escolha.style.display = "block";
})

// JOKENPÔ


// PAR OU ÍMPAR
