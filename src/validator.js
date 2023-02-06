const validator = {
isValid : function isValidCard(){

    //lógica da validação:
    //pegar números digitados no input
    //inverter a ordem desses números
    //dobrar o valor dos índices ímpares
    //subtrair 9 do valor dobrado se ele for maior que 9
    //tranformar todos os números em uma string única
    //somar todos os números
    //se o resultado for igual a um múltiplo de 10 = cartão válido

    var num_obrigatorio = document.getElementById("num_obrigatorio");
    var numeros = [];
    var input = document.getElementById("inum");

    if(input.value.length <= 10){ //caso o valor inserido seja menor que 10 dígitos,mostrar a mensagem:
        num_obrigatorio.innerText = "Este campo está incompleto, preencha-o corretamente."
    
    }else{

        num_obrigatorio.innerHTML = "";

        numeros.push(input.value); //para jogar os valores digitados dentro do array *numeros*

        var numerosInvertidos = input.value.split('').reverse().join(''); //para reverter os números

        console.log(numeros);
        console.log(numerosInvertidos);

    const Arr = Array.from(numerosInvertidos); //para transformar em array
    console.log(Arr);

    let dobrarDigito = Arr.map(function(element, index){ //para mapear os elementos e indice do array
        // console.log(element);
        // console.log(index);
        if(index % 2 === 0){//se o indice dividido por 2 tiver resto 0 (múltiplo de 2)
            return element; //retornar apenas o elemento
        }else return element*2; // se não (indice ímpar): retornar o valor x 2
        });
    console.log(dobrarDigito);

    let subtrairDigito = dobrarDigito.map(function(element,index){
        if(index % 2 ===0){ 
            return element;
            }else if(element > 9) //se o índice impar tiver um número maior que 9
            { return element - 9; //subtrair 9
            }else return element;
    });
    console.log(subtrairDigito);

    var numberArray = subtrairDigito.map(Number); //transformar o array com todas as alterações feitas em um array de números
    console.log(numberArray);

    var soma = numberArray.reduce(function(soma,i){ //somar todos os números do array
    return soma + i;
    });
    console.log(soma);
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
    console.log(indice);
    var mascara = '#'.repeat(indice)+indice4;
    console.log(mascara);
    
    var resultado = document.querySelector(".validacao");
    
    if(soma % 10 === 0){
        limparInput;
        resultado.innerHTML = "O número inserido foi " + mascara +  "<br>Cartão Válido. Obrigada pela sua compra!"
    }else{
        resultado.innerHTML = "O número inserido foi " + mascara + "<br>Cartão Inválido. Tente novamente."
    }  
}
maskfy(input.value);
}

};

export default validator;
