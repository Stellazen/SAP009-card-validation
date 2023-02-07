const validator = {
  isValid : function(cardNumber){
    if(cardNumber.length <= 10){ //caso o valor inserido seja menor que 10 dígitos,mostrar a mensagem:
        return "Este campo está incompleto, preencha-o corretamente."
    }else{
       
    let numerosInvertidos = cardNumber.split('').reverse().join(''); //para reverter os números
    console.log(numerosInvertidos);
    const arr = Array.from(numerosInvertidos); //para transformar em array
  
    let dobrarDigito = arr.map(function(element, index){ //para mapear os elementos e indice do array
      if(index % 2 === 0){//se o indice dividido por 2 tiver resto 0 (múltiplo de 2)
          return element; //retornar apenas o elemento
      }else return element*2; // se não (indice ímpar): retornar o valor x 2
      });
   console.log(dobrarDigito);
    const subtrairDigito = dobrarDigito.map(function(element,index){
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
    return soma % 10 === 0;
    }
  },
  maskfy : function(valorDigitado){
    console.log(valorDigitado);
    var indice = valorDigitado.length - 4;
    var indice4 = valorDigitado.substring(indice);
    console.log(indice4);
    console.log(indice);
    var mascara = '#'.repeat(indice)+indice4;
    return mascara;
    }
}
export default validator;
