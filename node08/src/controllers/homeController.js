// const HomeModel = require('../models/HomeModel')

// HomeModel.create({
//     titulo:'As cronicas de testes 01',
//     descricao: 'testando o mongo 01'
// }).then(dados => console.log(dados)).catch(e=> console.log(e))
// HomeModel.find().then(dados=>console.log(dados)).catch(e=> console.log(e))

//alternativas que podem da certo
exports.paginaInicial = (req, res) => {
    res.render('index', {
        titulo: 'Este é o titulo',
        numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    });
    return;
}


exports.trataPost = (req,res) => {
    res.send(req.body)
    return;
}

















// exports.paginaInicial = (req,res) =>{
//     // console.log('esse nove tá aqui')
//     // req.flash('info', 'Olá Mundo!')
//     // req.flash('bala', 'olá')
//     // console.log(req.flash('info'),req.flash('bala'))
//     // req.session.usuario = { nome:'paulo', logado:true }
//     // console.log(req.session.usuario)
//     res.render('index');
//     // console.log('respondendo cliente')
//     //isso aqui é com next
//     // console.log(`titi titi titi olha o que tem aqui na req.session: ${req.session}, agora na req.session.nome: ${req.session.nome} e na req.session.sobrenome: ${req.session.sobrenome}`)
//     // next()
//     return
// }