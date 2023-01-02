//-------------importes------------
const express = require('express')
const fs = require('fs');
const bodyParser = require('body-parser');
const session = require('express-session')
const path = require('path');



//------------Configs--------------
const app = express();

require('dotenv').config()


app.use(session({
    secret: process.env.SECRET, 
    resave: false, 
    saveUninitialized: true,
}))



app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use(express.static('views'));
app.use(express.static('public'));
app.use(express.static('uploads'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs');



//----------------POST--------------------



app.post('/contact/menssage', (req,res)=>{
    let data = {
        nome: req.body.nome,
        email: req.body.email,
        mensagem: req.body.message
    }
    console.log(data);
    res.redirect('/contact')
})  


//-----------------GET--------------------

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/about',(req, res)=>{
    res.render('about')
})

app.get('/skills',(req, res)=>{
    res.render('skills')
})

app.get('/work',(req, res)=>{
    res.render('work')
})

app.get('/contact',(req, res)=>{
    res.render('contact')
})






//----------------SERVER-------------------

const port = process.env.PORT || 80
app.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}` );
});
