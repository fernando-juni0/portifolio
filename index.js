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
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs');



//----------------POST--------------------



app.post('/contact/menssage', (req,res)=>{
    let data = {
        nome: req.body.nome,
        email: req.body.email,
        mensagem: req.body.message,
        lang: req.body.lang
    }
    if (data.lang == 'pt-BR') {
        trasporter.sendMail({
            text: 'Olá sua mensagem já foi recebida logo entrarei em contato.',
            html:'<b>Olá sua mensagem já foi recebida logo entrarei em contato.</b>',
            subject: "Nova Mensagem de Fernando Júnio",
            from: "Fernando Júnio <fernando132sj@gmail.com>",
            to: [data.email,'fernando132sj@gmail.com']
        })
    }else if(data.lang == 'en-US'){
        trasporter.sendMail({
            text: 'Hello, your message has been received, I will contact you soon.',
            html:'<b>Hello, your message has been received, I will contact you soon.</b>',
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
