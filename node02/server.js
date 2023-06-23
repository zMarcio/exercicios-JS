const express = require('express');
const app = express();
// app.use('express')



app.get('/',(req,res)=>{
    res.send(`hello <b>world!!</b>`)
});

app.get('/contato', (req,res) => {
    res.send('Obrigado <b>AQUI mesmo</b>')
})

app.listen(port = 3000, () => console.log(`servidor executando aqui http://localhost:${port}`))