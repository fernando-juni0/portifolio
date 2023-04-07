var open_lang_popup = false
var langSelected = document.getElementById('lang_selected')
var index = Number(document.getElementById('index').value)



var textLangs = {
    'en-US':{
        index:{
            'main-title': "<span id='index-ola'>Hello</span>, <br> My name is Fernando,<br> I'm a full-stack developer",
            'contact-button':'Contact Me!',
            'text-paragrafo':'Back-End Developer / JavaScript Expert',
            'picker-text': 'Select your favorite color!'
        },
        about:{
            "main-title":'A little about myself',
            'text-paragrafo':"I'm a programmer located in Brazil, I have a huge passion for programming, especially with the back-end, which is where I develop better. <br><br>In general, I consider myself a shy person, but over time I adapt better with the people next to me, I like to play with friends, I also like to help my friends who are starting to program now, because in addition to them learning, I also learn soon we all win. <br><br>My goal is to revolutionize people's lives through technology."
        },
        contact:{
            "main-title":'Contact Me',
            'text-paragrafo':"I'm interested in freelance opportunities, especially ambitious or large projects. however, if you have any other request or question, you can use the form below to communicate with me or through the other means of contact in the menu bar.",
            'enviar':'Submit',
        },
        skills:{
            "main-title":'A little about myself',
            'text-paragrafo':`I started programming thanks to a course I took here in my city approximately 5 years ago, since then I've been studying and making an effort to conquer my space, I've already taught classes, worked for a company, done volunteer work and others to acquire knowledge. <br><br>I'm a complete front-end and back-end developer, I create entire systems by myself and I'm improving my techniques every time. <br><br>I'm currently programming with JavaScript using Nodejs on the Back-end. I also develop with HTML, CSS and pure JavaScript. <br><br>I also have other knowledge such as Hosting, Firebase, relational and non-relational databases, APIS.`,
            'work-title': 'Full-Stack Developer',
            'work-resume': 'Contributes to the development of a system on the platform that served education networks in Brazil.'
        },
        work:{
            "twitter-descricao":"This is a Twitter clone that aims to make the main Back-End functionalities in addition to expanding my knowledge, <b><br><br>To see the code click on the card and you will be redirected!</b>",
            "infoeduc-descricao":"InfoEduc was a company that I worked for here in my city where my role was to develop plugins and templates for the company's main education platform. <b><br><br>To see the platform click on the card and you will be redirected!</b>",
            "spotify-descricao":"The spotify clone was my first project when I really started programming it helped me a lot mainly with the backend in nodejs and thanks to it I also got my old job, currently I see several problems with it because I didn't have all the knowledge at the time however it is still very functional.<b><br><br>To see the repository click on the card and you will be redirected!</b>",
            "work-title":"Below are some of my work or personal projects.",
            "work-subTitle":"You can hover over cards to learn more or click on them to be redirected either to the repository or to a webpage.",
            "portifolio-descricao":"By clicking you can see the source code of the portfolio.",
            "devtools-descricao":"This is a project I am developing to speed up the process of formatting the computer, it will be possible to download essential applications, activate optimizations and configurations for developers.<b><br><br>To see the repository click on the card that you will be redirected!</b>"
        },
        curriculo:{
            'main-title':"My Curriculum! &#x2661;",
            'resumo':"Here you can see the preview of my resume and if you wish you can also download it!",
            'certificado-button':"Check the Certificates",
            'download-button':"Download Curriculum"
        },
        certificados:{
            'main-title':"My Certificates📜",
            'resumo':"Below you can see all my course certificates I was able to complete, if you feel like it and you can download them in PDF format by clicking the button!",
            "certificado-presencial":"Classroom Course Certificates",
            'prepara-title':"Certificate Prepara Cursos",
            'certificado-online':"Online Course Certificates",
            "voltar-curriculo": "Back to curriculum"
        }
    },
    'pt-BR':{
        index:{
            'main-title': "<span id='index-ola'>Olá</span>, <br> Meu nome é Fernando,<br> Sou um desenvolvedor full-stack",
            'contact-button':'Entre em contato!',
            'text-paragrafo':'Desenvolvedor Back-End / Especialista em JavaScript',
            'picker-text': 'Selecione a sua cor favorita!'

        },
        about:{
            "main-title":'Um pouco sobre mim',
            'text-paragrafo':"Sou um programador localizado no Brasil, tenho uma paixão enorme por programação, principalmente com o back-end, que é onde me desenvolvo melhor. <br><br>No geral, me considero uma pessoa tímida, mas com o tempo me adapto melhor com as pessoas ao meu lado, gosto de brincar com os amigos, gosto também de ajudar meus amigos que estão começando a programar agora, pois além deles aprendendo, também posso aprender logo todos nós ganhamos. <br><br>Meu objetivo é revolucionar a vida das pessoas por meio da tecnologia."
        },
        contact:{
            "main-title":'Fale comigo',
            'text-paragrafo':"Estou interessado em oportunidades freelance, especialmente projetos ambiciosos ou grandes. No entanto, se você tiver qualquer outro pedido ou pergunta, pode usar o formulário abaixo para se comunicar comigo ou através dos outros meios de contato em a barra de menus.",
            'enviar':'Enviar',
        },
        skills:{
            "main-title":'Um pouco sobre mim',
            'text-paragrafo':`Comecei a programar graças a um curso que fiz aqui na minha cidade há aproximadamente 5 anos, desde então venho estudando e me esforçando para conquistar meu espaço, já dei aulas, trabalhei para empresas, fiz trabalhos voluntários e outros para adquirir conhecimento. <br><br>Sou um desenvolvedor front-end e back-end completo, crio sistemas inteiros sozinho e estou sempre aprimorando minhas técnicas. <br><br>Atualmente estou programando com JavaScript usando Nodejs no Back-end. Também desenvolvo com HTML, CSS e JavaScript puro. <br><br>Possuo também outros conhecimentos como Hospedagem, Firebase, bancos de dados relacionais e não relacionais, APIS.`,
            'work-title': 'Desenvolvedor Full-Stack',
            'work-resume': 'Contribui para o desenvolvimento de um sistema na plataforma que atendeu redes de ensino no Brasil.'
        },
        work:{
            "twitter-descricao":"Esse e um clone do Twitter que tem como objetivo fazer as principais funcionalidades do Back-End alem de expandir meus conhecimentos, <b><br><br>Para ver o repositório  clique no card que você será redirecionado!</b>",
            "infoeduc-descricao":"InfoEduc foi uma empresa que eu trabalhei aqui em minha cidade aonde minha função era desenvolver plugins e templates para a plataforma principal de educação da empresa. <b><br><br>Para ver a plataforma clique no card que você será redirecionado!</b>",
            "spotify-descricao":"O clone do spotify foi o meu primeiro projeto quando realmente comecei a programar me ajudou muito principalmente com o back-end em nodejs e graças a ele também consegui meu antigo emprego, atualmente vejo vários problemas nele pois eu não tinha todos os conhecimentos na época porém ainda esta bem funcional.<b><br><br>Para ver o repositório  clique no card que você será redirecionado!</b>",
            "work-title":"Abaixo são alguns dos meus trabalhos ou projetos pessoais.",
            "work-subTitle":"Você pode passar o mouse sobre os cards para saber mais ou clicar nos mesmos para ser redirecionado ou para o repositório ou para uma página web.",
            "portifolio-descricao":"Clicando você pode ver o código fonte do portfólio",
            "devtools-descricao":"Esse e um projeto que eu estou desenvolvendo para dar mais agilidade no processo de formatação do computador, nele sera possível baixar aplicativos essenciais, ativar otimizações e configurações para desenvolvedores.<b><br><br>Para ver o repositório  clique no card que você será redirecionado!</b>"
        },
        curriculo:{
            'main-title':"Meu Curriculo! &#x2661;",
            'resumo':"Aqui voce pode ver o preview do meu curriculo e caso deseje tambem pode ser feito o download do mesmo!",
            'certificado-button':"Conferir os Certificados",
            'download-button':"Baixar Currículo"
        },
        certificados:{
            'main-title':"Meus Certificados📜",
            'resumo':"Abaixo é possível ver todos os meus certificados de cursos que pude concluir, caso tenha vontade e possível baixá-los no formato PDF ao clicar no botão!",
            "certificado-presencial":"Certificados de Cursos Presenciais",
            'prepara-title':"Certificado Prepara Cursos",
            'certificado-online':"Certificados de Cursos Online",
            "voltar-curriculo": "Voltar para o curriculo"
        }
    }
}








langVerification()
function langVerification(){
    const idioma = localStorage.getItem('lang')
    function textSelect(ids,page) {
        ids.forEach((res)=>{
            document.querySelector("#"+res).innerHTML = page[res]
        })
    }
    switch (idioma) {
        case undefined:
        case null:
            let navLang = window.navigator.language
            if (navLang == null || navLang == undefined || navLang == "") {
                localStorage.setItem('lang', "en-US");
            }else{
                localStorage.setItem('lang', navLang);
            }
            break;
        case 'en-US':
            document.querySelector('html').setAttribute('lang', 'en-US')
            langSelected.src = '../public/assets/svgs/US.svg'
            switch (index) {
                case 0:
                    textSelect(['contact-button','main-title',"text-paragrafo","picker-text"],textLangs["en-US"].index)
                    break;

                case 1:
                    textSelect(['main-title',"text-paragrafo"],textLangs["en-US"].about)
                    break;

                case 2:
                    textSelect(['main-title',"text-paragrafo","work-resume","work-title"],textLangs["en-US"].skills)
                    break;

                case 3:
                    textSelect(["devtools-descricao","portifolio-descricao",'twitter-descricao',"infoeduc-descricao","spotify-descricao","work-title","work-subTitle"],textLangs["en-US"].work)
                    break;

                case 4:
                    textSelect(["main-title","resumo",'certificado-button',"download-button"], textLangs["en-US"].curriculo)
                    break;

                case 5:
                    textSelect(["main-title","text-paragrafo",'enviar'], textLangs["en-US"].contact)
                    break;
                case 6:
                    textSelect(["main-title","resumo","voltar-curriculo","certificado-online","prepara-title",'certificado-presencial'], textLangs["en-US"].certificados)
                    break;
            }
            break;
        case 'pt-BR':
            document.querySelector('html').setAttribute('lang', 'pt-BR')
            langSelected.src = '../public/assets/svgs/BR.svg'
            switch (index) {
                case 0:
                    textSelect(['contact-button','main-title',"text-paragrafo","picker-text"],textLangs["pt-BR"].index)
                    break;

                case 1:
                    textSelect(['main-title',"text-paragrafo"],textLangs["pt-BR"].about)
                    break;

                case 2:
                    textSelect(['main-title',"text-paragrafo","work-resume","work-title"],textLangs["pt-BR"].skills)
                    break;

                case 3:
                    textSelect(["devtools-descricao","portifolio-descricao",'twitter-descricao',"infoeduc-descricao","spotify-descricao","work-title","work-subTitle"],textLangs["pt-BR"].work)
                    break;

                case 4:
                    textSelect(["main-title","resumo",'certificado-button',"download-button"], textLangs["pt-BR"].curriculo)
                    break;

                case 5:
                    textSelect(["main-title","text-paragrafo",'enviar'], textLangs["pt-BR"].contact)
                    break;
                case 6:
                    textSelect(["main-title","resumo","voltar-curriculo","certificado-online","prepara-title",'certificado-presencial'], textLangs["pt-BR"].certificados)
                    break;
            }
            break;

    }
}
document.getElementById('lang-containner').addEventListener('click',()=>{
    document.getElementById('lang-containner').style.display = 'none'
    open_lang_popup = false
})

document.getElementById('lang_selected').addEventListener('click',()=>{
    if (open_lang_popup == false) {
        document.getElementById('lang-containner').style.display = 'flex'
        open_lang_popup = true
    }else{
        document.getElementById('lang-containner').style.display = 'none'
        open_lang_popup = false
    }
})

document.querySelectorAll('.lang-icons').forEach((item)=>{
    item.addEventListener('click',()=>{
        let lang = item.getAttribute('data-lang')
        localStorage.setItem('lang', lang);
        if (lang == 'en-US') {
            langSelected.src = '../public/assets/svgs/US.svg'
            
        }else if (lang == 'pt-BR') {
            langSelected.src = '../public/assets/svgs/BR.svg'
        }
        open_lang_popup = false
        document.getElementById('lang-containner').style.display = 'none'
        document.getElementById('load-containner').style.display = "flex"
        setTimeout(()=>{     
            langVerification()
            document.getElementById('load-containner').style.display = "none"
            
        }, 2000);
        setTimeout(()=>{     
            langVerification()
            document.getElementById('load-containner').style.display = "none"
            saveNot()
        }, 2200);
        
        
    })
})
