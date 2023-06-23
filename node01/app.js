// const fs = require('fs').promises;
const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json')
const escreve = require('./modules/escrever')
const ler = require('./modules/ler');
const { json } = require('express');

// const pessoas = [
//     {nome:'dalo'},
//     {nome:'dalo'},
//     {nome:'dalo'},
//     {nome:'dalo'},
//     {nome:'dalo'},
//     {nome:'dalo'},
// ];

// const json = JSON.stringify(pessoas, '' ,2)
// escreve(caminhoArquivo, json)


async function lerArquivo(caminho){
    const dados = await ler(caminho);
    renderizaDados(dados);
}

function renderizaDados(dados){
    dados = JSON.parse(dados)
    dados.forEach(v => console.log(v))
}


lerArquivo(caminhoArquivo);