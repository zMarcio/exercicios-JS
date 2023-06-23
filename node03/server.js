const express = require('express');
const app = express();
// app.use('express')



app.get('/',(req,res)=>{
    res.send(`hello <b>world!!</b>`)
});

app.get('/contato', (req,res) => {
    res.send('Obrigado <b>AQUI mesmo</b>')
});

app.get('/teste', (req,res) => {
    res.send(req.query)
    // console.log('oi')
    // res.send('oi');
});


app.get('/teste/:idUsuarios?', (req,res) =>{
    console.log(req.params)
    console.log(req.query)
    res.send(req.query)
});

app.listen(port = 3000, () => console.log(`servidor executando aqui http://localhost:${port}`))