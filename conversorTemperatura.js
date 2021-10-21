// O FRONT END ENVIA DOIS PARAMETROS PARA A API : temperatura e conversor

// A API usa esses dados para fazer uma conversao 

// NOSSA APLICACAO E DIVIDIDA EM DUAS CAMADAS : CAMADA DE SERVICO  E CAMADA REST

//CAMADA DE SERVIO = conversorTemperatura.js
          //- cria funcoes de conversation
          // exporta funcoes que serao acessadas pela camada REST
          
//CAMADA DE REST = index.js
          // - recebe parametros do front-end 
          // - chamar a funcao de conversao
          // - enviar resposta para o front-end

// PRIMEIRO PASSSO : CONSTRUIR A CAMADA DE SERVICO POIS ELA E A BASE DA APLICACAO
// E AQUI QUE FICA AS FUNCOES DE CONVERSAO DE TEMPERATURA
// fazemos dessa forma pois a camada REST precisa acessar a camda de servico para chamar a funcao de conversao



function converteTemperatura(temperatura, conversor){

  let resultado;

  if(conversor == 'C')
  {
      resultado = converteParaCelsius(temperatura);
  }
  else if(conversor == 'F')
  {
      resultado = converteParaFahrenheit(temperatura)
  }

  return resultado;
}

function converteParaCelsius(fahrenheit){
  let celsius = (fahrenheit - 32) / 1.8;

  return celsius;
}

function converteParaFahrenheit(celsius){
  let fahrenheit = (celsius * 1.8) + 32;

  return fahrenheit;
}

exports.converteTemperatura = converteTemperatura;


