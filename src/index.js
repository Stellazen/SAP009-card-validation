// import validator from './validator.js';

// console.log(validator);

//VALIDAÇÃO DO CARTÃO:

var botao = document.querySelector(".botao"); 
var num_obrigatorio = document.getElementById("num_obrigatorio");

botao.onclick = function validar(){

    var numeros = [];
    var input = document.getElementById("inum");

    if(input.value.length <= 12){
        num_obrigatorio.innerText = "Este campo está incompleto, preencha-o corretamente."
    
    }else{

        num_obrigatorio.innerHTML = ""

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
            return element;
        }else return element*2;
        });
        console.log(dobrarDigito);

        let subtrairDigito = dobrarDigito.map(function(element,index){
            if(index % 2 ===0){
                return element;
                }else if(element > 9)
                { return element - 9;
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

        //pegar o valor digitado
       
        //substituir os números por # com exceção dos últimos 4
            //pegar 4 últimos dígitos
            //contar quantos dig tem antes dos últimos 4
            //montar uma string que tem a quantidade de dígitos, subtitiudos por#
            //somar com os últimos 4
        
        //printar esse resultado no input
       
       
        function maskfy(valorDigitado){
            console.log(valorDigitado);
            var indice = valorDigitado.length - 4;
            var indice4 = valorDigitado.substring(indice);
            console.log(indice4);
        }
        maskfy(input.value);
        
    }




    // //MASKFY

    // function mascara(o,f){
    //     v_obj=o
    //     v_fun=f
    //     setTimeout("execmascara()",1)
    // }
    // function execmascara(){
    //     v_obj.value=v_fun(v_obj.value)
    // }
    // function mcc(v){
    //     v=v.replace(/\D/g,"");
    //     v=v.replace(/^(\d{4})(\d)/g,"$1 $2");
    //     v=v.replace(/^(\d{4})\s(\d{4})(\d)/g,"$1 $2 $3");
    //     v=v.replace(/^(\d{4})\s(\d{4})\s(\d{4})(\d)/g,"$1 $2 $3 $4");
    //     return v;
    // }
    // function id( el ){
    //     return document.getElementById( el );
    // }
    // window.onload = function(){
    //     id('cc').onkeypress = function(){
    //         mascara( this, mcc );
    //     }
    // }
}
