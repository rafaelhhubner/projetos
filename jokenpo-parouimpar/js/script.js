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

let sorteio;

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

function randomNumber (a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
}

// JOKENPÔ
let contadorVitoriasJok = 0
let contadorDerrotasJok = 0
let contadorEmpatesJok = 0
jogarJok.addEventListener("click", function() {
    relatorio = document.querySelector("#relatorio-1")

    let suaJogadaJok = document.getElementsByName("pepate")
    let suaJogada;
    let pcJogada;
    let resultadoRodada;

    if (!suaJogadaJok[0].checked && !suaJogadaJok[1].checked && !suaJogadaJok[2].checked) {
        window.alert("Escolha uma opção");
    } else {
        repetirJok.style.display = "block"
        resultsJok.style.display = "block";
        jokenpo.style.display = "none";
        escolha.style.display = "none";
        // Sua jogada
        if (suaJogadaJok[0].checked) {
            console.log("PEDRA")
            suaJogada = "Pedra"
        } else if (suaJogadaJok[1].checked) {
            console.log("TESOURA")
            suaJogada = "Tesoura"
        } else if (suaJogadaJok[2].checked) {
            console.log("PAPEL")
            suaJogada = "Papel"
        }

        // Jogada do PC
        sorteio = randomNumber(1, 3)
        if (sorteio === 1) {
            pcJogada = "Pedra"
        } else if (sorteio === 2) {
            pcJogada = "Tesoura"
        } else if (sorteio === 3) {
            pcJogada = "Papel"
        }

        // Comparar as jogadas e obter resultado
        if (suaJogada === pcJogada) {
            resultadoRodada = "Empate"
        } 
        if (suaJogada === "Pedra") {
            if (pcJogada === "Tesoura") {
                resultadoRodada = "Vitória"
            } else if (pcJogada === "Papel") {
                resultadoRodada = "Derrota"
            }
        }
        if (suaJogada === "Tesoura") {
            if (pcJogada === "Papel") {
                resultadoRodada = "Vitória"
            } else if (pcJogada === "Pedra") {
                resultadoRodada = "Derrota"
            }
        }
        if (suaJogada === "Papel") {
            if (pcJogada === "Pedra") {
                resultadoRodada = "Vitória"
            } else if (pcJogada === "Tesoura") {
                resultadoRodada = "Derrota"
            }
        }

        // Atualizar o contador de acordo com o resultado
        if (resultadoRodada === "Vitória") {
            contadorVitoriasJok++
        } else if (resultadoRodada === "Derrota") {
            contadorDerrotasJok++
        } else if (resultadoRodada === "Empate") {
            contadorEmpatesJok++
        }
 
        // Limpar resultado e mostrar resultado
        placarJok.innerHTML = `${resultadoRodada}<br><br>`
        relatorio.innerHTML = `Você jogou <strong>${suaJogada}</strong> e o computador jogou <strong>${pcJogada}</strong> <br><br><br>`
        relatorio.innerHTML += `Vitórias: ${contadorVitoriasJok}<br>`
        relatorio.innerHTML += `Derrotas: ${contadorDerrotasJok}<br>`
        relatorio.innerHTML += `Empates: ${contadorEmpatesJok}<br>`

        console.log(resultadoRodada)
        console.log(suaJogada)
        console.log(pcJogada)
        console.log()
  

        resultadoRodada = ''
        }
})

repetirJok.addEventListener("click", function() {
    resultsJok.style.display = "none";
    resultsPar.style.display = "none";
    line.style.display = "none";
    escolha.style.display = "block";
})



// PAR OU ÍMPAR
let contadorVitoriasPar = 0;
let contadorDerrotasPar = 0;
let suaJogadaPar = document.getElementsByName("pi")
let numero = document.querySelector("#num")
let seuNumero;
let pcNumero;

jogarPar.addEventListener("click", function() {
    let suaJogada;
    let pcJogada;
    if (!suaJogadaPar[0].checked && !suaJogadaPar[1].checked) {
        window.alert("Por favor, selecione uma das opções")
    } else if (numero.value === "" || Number(numero.value) < 0 || Number(numero.value) > 9) {
        window.alert("Digite um número válido entre 0 e 9.")
    }else {
        // Definindo sua jogada
        repetirPar.style.display = "block"
        resultsPar.style.display = "block";
        parimpar.style.display = "none";
        escolha.style.display = "none";

        if (suaJogadaPar[0].checked) {
            suaJogada = "Par"
        } else if (suaJogadaPar[1].checked) {
            suaJogada = "Ímpar"
        }

        // Definindo a jogada do computador e o tipo de cada número
        sorteio = randomNumber(0, 9)
        nume = sorteio
        console.log(sorteio)
        console.log(randomNumber(num))
        
    }
})

function parOuImpar (n) {
    if (Number(n.value) % 2 == 0) {
        return "Par"
    } else {
        return "Ímpar"
    }
}

repetirPar.addEventListener("click", function() {
    resultsJok.style.display = "none";
    resultsPar.style.display = "none";
    line.style.display = "none";
    escolha.style.display = "block";
})