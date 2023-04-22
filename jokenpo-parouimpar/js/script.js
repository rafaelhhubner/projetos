// GERAL
let opçao = document.getElementsByName("jogo");
let escolha = document.querySelector("#escolha")
let jokenpo = document.querySelector("#jokenpo");
let parimpar = document.querySelector("#parimpar");
let escolher = document.querySelector("#btn-1");
let line = document.querySelector("#line");

let jogarJok = document.querySelector("#btn-2");
let jogarPar = document.querySelector("#btn-3");

let resultsJok = document.querySelector("#jokenResults");
let resultsPar = document.querySelector("#parimResults");
let repetir = document.querySelector("#btn-4")

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

    repetir.style.display = "block"
    resultsJok.style.display = "block";
    jokenpo.style.display = "none";
    escolha.style.display = "none";
})

jogarPar.addEventListener("click", function() {

    repetir.style.display = "block"
    resultsPar.style.display = "flex";
    parimpar.style.display = "none";
    escolha.style.display = "none";
})


// JOKENPÔ


// PAR OU ÍMPAR
