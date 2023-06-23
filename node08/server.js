require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING, {useNewUrlParser:true,useUnifiedTopology:true}).then(() => {
    // console.log('conectado a base de dados')
    app.emit('Pronto')
}).catch(e=>console.log(e))


const routes = require('./routes')
const path = require('path')
const helmet = require('helmet')
const csrf = require('csurf')
const { middleware, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware.js')

app.use(express.urlencoded({extended:true}))
app.use(express.static(path.resolve(__dirname,'public')))


const session = require('express-session')
const MongoStore = require('connect-mongo');
const flash = require('connect-flash')

const sessionOptions = session({
    secret:"fortaleza maior do nordeste",
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave:false,
    sabeUninitialized:false,
    cookie:{
        maxAge: 1000*60*60*24*7,
        httpOnly:true
    }
})



app.use(sessionOptions);
app.use(flash());
app.use(helmet())
app.use(csrf());
app.use(middleware)
app.use(checkCsrfError)
app.use(csrfMiddleware)
app.use(routes)
app.set('views', path.resolve(__dirname, 'src','views'));
app.set('view engine', 'ejs');




app.on('Pronto', () =>{
    app.listen(port = 3000, () => console.log(`servidor executando aqui http://localhost:${port}`))
})
