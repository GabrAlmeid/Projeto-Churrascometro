/*
Carne - 400g por pessoa + de 6 horas - 650g
Cerveja - 2000ml por pessoa + de 6 horas - 2700ml
Refrigerante/Água/suco - 1000ml por pessoa + de 6 horas - 1500ml

Crianças valem por 0,5
*/ 

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    console.log("Calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;


    let qntTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qntTotalCerveja = cervejaPP(duracao) * adultos;
    let qntTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

resultado.innerHTML = `<p>${qntTotalCarne/ 1000} Kg de Carne</p>` 
    resultado.innerHTML += `<p>${Math.ceil(qntTotalCerveja/ 355)} Latas de Cerveja</p>` 
    resultado.innerHTML += `<p>${Math.ceil(qntTotalBebidas/ 1000)} Litros de Bebida</p>` 
}

function carnePP(duracao){
    if(duracao >= 6){
        return 650;
    }
    else{
        return 400
    }
}

function cervejaPP(duracao){
    if(duracao >= 6){
        return 2700;
    }
    else{
        return 2000
    }
}

function bebidasPP(duracao){
    if(duracao >= 6){
        return 1500;
    }
    else{
        return 1000
    }
}

function limpar() {
    document.location.reload();
}



