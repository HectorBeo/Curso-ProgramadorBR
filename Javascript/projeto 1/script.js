//Regra de negocios
//Carne = 400 gr por pessoa / + de 6 horas = 650 gr por pessoa
// Cerveja = 1200 ml por pessoa / + de 6 horas = 2000 ml por pessoa
//Refrigerante/agua = 1000 ml por pessoa / + de 6 horas = 1500 ml por pessoa

//Crianças valem por 0,5



let adultosInput = document.getElementById("adultos");
let criancasInput = document.getElementById("criancas");
let duracaoInput = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    console.log("Calculando...")

    let adultos = adultosInput.value;
    let criancas = criancasInput.value;
    let duracao = duracaoInput.value;

    let carne;
    let cerveja;
    let refrigerante;

    if(duracao < 6){
        carne = 400;
        cerveja = 1200;
        refrigerante = 1000;
    }
    else{
        carne = 650;
        cerveja = 2000;
        refrigerante = 1500;
    }
    
    let qntCarne = ((adultos * carne) + (criancas * (carne / 2))) / 1000;
    let qntCerveja = (adultos * cerveja) / 355;
    let qntRefrigerante = ((adultos * refrigerante) + (criancas * (refrigerante / 2))) / 1000;

    resultado.innerHTML = `<p>${Math.ceil(qntCarne)} kg de Carne.</p>`;
    resultado.innerHTML += `<p>${Math.ceil(qntCerveja)} Latas de cerveja.</p>`;
    resultado.innerHTML += `<p>${Math.ceil(qntRefrigerante)} Litros de refrigerante/água.</p>`;
}