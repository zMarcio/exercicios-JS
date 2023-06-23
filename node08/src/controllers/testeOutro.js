exports.aiCalica = (req,res) => {
    res.send('testando aqui opa tudo de boa pai?')
}

exports.teste = (req,res) =>{
    req.send(req.body)
    return
}