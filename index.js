//-------------importes------------
const express = require('express')
const fs = require('fs');
const bodyParser = require('body-parser');
const session = require('express-session')
const path = require('path');
const nodemailer = require('nodemailer')


//------------Configs--------------
const app = express();

require('dotenv').config()


app.use(session({
    secret: process.env.SECRET, 
    resave: false, 
    saveUninitialized: true,
}))


const SMTP_CONFIG = require('./config/smtp')
const trasporter = nodemailer.createTransport({
    host: SMTP_CONFIG.host,
    port: SMTP_CONFIG.port,
    service:'gmail',
    secure: true,
    auth:{
        user: SMTP_CONFIG.user,
        pass: SMTP_CONFIG.pass
    },
    tls:{
        rejectUnauthorized: false
    }
})



app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use(express.static('views'));
app.use(express.static('public'));
app.use(express.static('uploads'));
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
app.use('/public', express.static(path.join(__dirname, '/public')));
app.set('views', './views')
app.set('view engine', 'ejs');



//----------------POST--------------------
app.post('/contact/menssage', (req,res)=>{
    let data = {
        nome: req.body.nome,
        email: req.body.email,
        mensagem: req.body.message,
        lang: req.body.lang,
        color: req.body.color
    }
    let full_colors = [
        {
            nome:'roxo',
            hex: '#9055FF'
        },
        {
            nome:'laranja',
            hex:'#f77700'
        },
        {
            nome:'vermelho',
            hex:'#f70000'
        },
        {
            nome:'rosa',
            hex:'#f700ce'
        },
        {
            nome:'azul',
            hex:'#009cf7'
        },
        {
            nome:'verde',
            hex:'#15f700'
        },
    ]
    let colorSelected = full_colors.find((item)=> {return item.nome == data.color})
    let hex = colorSelected.hex
    if (data.lang == 'pt-BR') {
        trasporter.sendMail({
            
            text: 'Olá sua mensagem já foi recebida logo entrarei em contato.',
            html:`<b>Olá sua mensagem já foi recebida logo entrarei em contato.</b><br><br><a href="https://portifolio-fernando.onrender.com"><button style="padding: 10px; background-color: ${hex}; color: white; font-weight: bold; outline: none; border: 1px solid #c4c4c488; cursor:pointer;">Ir para o Portfólio</button></a>`,
            subject: "Nova Mensagem de Fernando Júnio",
            from: "Fernando Júnio <fernando132sj@gmail.com>",
            to: [data.email,'fernando132sj@gmail.com']
        })
    }else if(data.lang == 'en-US'){
        trasporter.sendMail({
            text: 'Hello, your message has been received, I will contact you soon.',
            html:`<b>Hello, your message has been received, I will contact you soon.</b><br><br><a href="https://portifolio-fernando.onrender.com"><button style="padding: 10px; background-color: ${hex}; color: white; font-weight: bold; outline: none; border: 1px solid #c4c4c488; cursor:pointer;">Ir para o Portfólio</button></a>`,
            subject: "New Message from Fernando Júnio",
            from: "Fernando Júnio <fernando132sj@gmail.com>",
            to: [data.email,'fernando132sj@gmail.com']
        })
    }

    trasporter.sendMail({
        text: data.nome +" | "+ data.email +" | "+ data.mensagem,
        html: '<b>Nome: </b>' + data.nome +" <br><br> "+ '<b>Email: </b>' +data.email +" <br><br> "+ '<b>Mensagem: </b>' +data.mensagem,
        subject: "Nova Mensagem do Portifolio enviada por"+ data.nome,
        from: "Fernando Júnio <fernando132sj@gmail.com>",
        to: ['junio132sj@gmail.com','fernando132sj@gmail.com']
    })
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
