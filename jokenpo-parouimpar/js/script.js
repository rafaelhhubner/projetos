// JOKENPO

let opçao = document.getElementsByName("jogo")
let jokenpo = document.querySelector("#jokenpo")
let parimpar = document.querySelector("#parimpar")
let escolher = document.querySelector("#btn-1")
let line = document.querySelector("#line")

let jogarJok = document.querySelector("#btn-2")
let jogarPar = document.querySelector("#btn-4")

let resultsJok = document.querySelector("#jokenResults")
let resultsPar = document.querySelector("#parimResults")

escolher.addEventListener("click", function() {
    resultsJok.style.display = "none";
    resultsPar.style.display = "none";

    if (opçao[0].checked) {
        parimpar.style.display = "none"
        jokenpo.style.display = "block"
        line.style.display = "block"
    } else if (opçao[1].checked) {
        jokenpo.style.display = "none"
        parimpar.style.display = "block"
        line.style.display = "block"
    }
})

jogarJok.addEventListener("click", function() {
    resultsJok.style.display = "block"
    jokenpo.style.display = "none"
})

jogarPar.addEventListener("click", function() {
    resultsPar.style.display = "block"
    parimpar.style.display = "none"
})



// PAR OU ÍMPAR
