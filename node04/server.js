const express = require('express');
const app = express();
const routes = require('./routes')
app.use(express.urlencoded({extended:true}))
// app.use('express')

app.use(routes)





app.listen(port = 3000, () => console.log(`servidor executando aqui http://localhost:${port}`))