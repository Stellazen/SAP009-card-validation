// import validator from './validator.js';

// console.log(validator);

var botao = document.querySelector(".botao");

botao.onclick = function validar(){

    var input = document.getElementById("inum");
   
    var numeros = [];
    
    numeros.push(input.value);

    numeros.reverse();

    console.log(numeros);

    var resultado = document.querySelector(".validacao");
    resultado.innerText = "Os números inseridos foram " + numeros;
    
}
