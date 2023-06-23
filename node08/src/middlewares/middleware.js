//vc pode exporta seus middlewares por aqui tbm, fazer algo global meio q vc pode fazer isso aqui para confirmação e teste, pq vai ficar global e separado deixando mais organizado

// const exports = require("webpack");

//vc pode manipular ele aqui no exp vem alonso e eu mudo para cachaça
//dessa forma o middleware fica de forma global
exports.middleware = (req,res,next) => {
//    req.body.client = "faz o L"
    // if(req.body.client){
    //     console.log()
    //     console.log(`seu nome: ${req.body.client}`)
    //     console.log()
    // }

    res.locals.umaVariavelLocal = 'Este é o valor da variavel local.';
    next();
}

exports.checkCsrfError = (err,req,res,next) =>{
    if(err&&err.code =='EBADCSRFTOKEN'){
        return res.render('404')
    }
}

exports.csrfMiddleware = (req,res,next) => {
    res.locals.csrfToken = req.csrfToken()
    next();
}