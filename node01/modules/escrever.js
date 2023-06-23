const fs = require('fs').promises;
// const path = require('path');

// const caminhoArquivo = path.resolve(__dirname, '..' , 'teste.json')

//esse aqui apaga o q tem dentro e escreve frase1
// fs.writeFile(caminhoArquivo, 'Frase1' , {flag:'w', encoding:'utf8'})
//esse aqui escrevre frase1 independente do q tem dentro

// const pessoas = [
//     {nome:'dalo'},
//     {nome:'dalo'},
//     {nome:'dalo'},
//     {nome:'dalo'},
//     {nome:'dalo'},
//     {nome:'dalo'},
// ];

// const json = JSON.stringify(pessoas, '' ,2)
module.exports = (caminho,dados) =>{
    fs.writeFile(caminho, dados , {flag:'w'});
}