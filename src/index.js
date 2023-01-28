// import validator from './validator.js';

// console.log(validator);

var botao = document.querySelector(".botao");

var numeros = [];

var nome_obrigatorio = document.getElementById("nome_obrigatorio");
var nome_inserido = document.getElementById("inome");
var num_obrigatorio = document.getElementById("num_obrigatorio");

botao.onclick = function validar(){

    var input = document.getElementById("inum");
    
    numeros.push(input.value);

    var numerosInvertidos = input.value.split('').reverse().join('');

    console.log(numeros);
    console.log(numerosInvertidos);

   const Arr = Array.from(numerosInvertidos);
   console.log(Arr);

   let dobrarDigito = Arr.map(function(element, index){
    // console.log(element);
    // console.log(index);
    if(index % 2 === 0){
        return element*2;
    }else return element;
    });
    console.log(dobrarDigito);

    let subtrairDigito = dobrarDigito.map(function(element,index){
        if(index % 2 ===0){
            if(element > 9){
                return element - 9;
            }else return element;
        }else return element;
    });
    console.log(subtrairDigito);

    var numberArray = subtrairDigito.map(Number);
    console.log(numberArray);

    var soma = numberArray.reduce(function(soma,i){
      return soma + i;
    });
     console.log(soma);


    var resultado = document.querySelector(".validacao");
    if(soma % 10 === 0){
        resultado.innerText = "Cartão Válido. Obrigada pela sua compra!"
    }else{
        resultado.innerText = "Cartão Inválido. Tente novamente."
    }

    if(nome_inserido.value.length === 0){
        nome_obrigatorio.innerText = "Este campo não pode ficar vazio"
    }else if(input.value.length === 0){
        num_obrigatorio.innerText = "Este campo não pode ficar vazio"
    }else{
        
    }
}
