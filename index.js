// O FRONT END ENVIA DOIS PARAMETROS PARA A API : temperatura e conversor

// A API usa esses dados para fazer uma conversao 

// NOSSA APLICACAO E DIVIDIDA EM DUAS CAMADAS : CAMADA DE SERVICO  E CAMADA REST

//CAMADA DE SERVIO = conversorTemperatura.js
//CAMADA DE REST = index.js

// PRIMEIRO PASSSO : CONSTRUIR A CAMADA DE SERVICO POIS ELA E A BASE DA APLICACAO
//SEGUNDO PASSO :  


const express = require('express');
const app = express();

const conversorTemperatura = require('./conversorTemperatura');

app.get('/', (req, res) => {
    let temperatura = req.query.temperatura;
    let conversor = req.query.conversor;

    let temperaturaGraus = conversorTemperatura.converteTemperatura(temperatura, conversor);

    let json = {temperatura: temperaturaGraus};

    res.json(json);
});

app.listen(8080 , () => {
    let data = new Date();
    console.log('Servidor node iniciado em: ' + data);
});