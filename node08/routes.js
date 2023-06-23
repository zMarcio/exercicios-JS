const express = require('express')
const route = express.Router();
const homerController = require("./src/controllers/homeController")
const teste = require('./src/controllers/testeOutro')

// function meuMiddleware(req,res,next){
//     req.session = { nome:'lula', sobrenome:'silva' }
//     console.log()
//     console.log('Passei no seu middleware')
//     console.log()
//     next();
// }

//route funciona da seguinte forma vc da um require onde está seu get post, no caso aqui está dentro da pasta controller, e lá vc colocar suas rotas, do que irá sair no req ou res, e aqui no routes.js vc colocar tudo, importando em um const ou variavel o requerimento do arquivo, pós isso vc tem chama ela do jeito q está aqui a baixo
route.get('/', homerController.paginaInicial)
//vc coloca aqui em cima e faz isso aqui , function(req,res,next){
//     console.log();
//     console.log('ainda estou aqui')
// }
route.post('/', homerController.trataPost)


route.get('/teste', teste.aiCalica)
























module.exports = route