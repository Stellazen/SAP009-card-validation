import validator from './validator.js';

const botao = document.querySelector(".botao"); 

botao.onclick = function validar(){
  const num_obrigatorio = document.getElementById("num_obrigatorio");
  const input = document.getElementById("inum");
  const resultado = document.querySelector(".validacao");

  if(input.value <= 10){
    num_obrigatorio.innerHTML = "Este campo está incompleto. Por favor digite novamente."
  }else{
    num_obrigatorio.innerHTML = "";

    const numMask = validator.maskfy(input.value);

    const isValid = validator.isValid(input.value);
    if(isValid){
      resultado.innerHTML=`O número digitado foi ${numMask} <br>Cartão Válido, obrigada!`;
      input.value = " ";
    }else{
      resultado.innerHTML=`O número digitado foi ${numMask} <br> Cartão Inválido.`;
      input.value = " ";
    }
  }
}



