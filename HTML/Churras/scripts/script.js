// Carne - 400 gr por pessoa   + de 6 horas - 650
// Cerveja - 1200 ml por Pessoa + 6 horas - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml

// Crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    // console.log("Calculando...")
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value
    let resultado = carnePP(duracao);

    let qdtTotalCarne = resultado * adultos + (resultado / 2 * criancas);

    console.log(qdtTotalCarne);
}

function carnePP(duracao) {

    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

var p2 = 400
var p1 = 7

function myFunction(p1) {
    if (p1 > 6) {
        return 650
    } else {
        return 400
    }
}
var resultado = myFunction(p1)

console.log(myFunction(p1))
console.log(p1)
console.log(p2)
console.log(resultado)