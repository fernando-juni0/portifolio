var open_lang_popup = false
var langSelected = document.getElementById('lang_selected')
var index = Number(document.getElementById('index').value)



var textLangs = {
    'en-US':{
        index:{
            'main-title': "Hello, <br> My name is Fernando,<br> I'm a full-stack developer",
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
            "portifolio-descricao":"By clicking you can see the source code of the portfolio."
        },
        curriculo:{
            'main-title':"My Curriculum! &#x2661;",
            'resumo':"Here you can see the preview of my resume and if you wish you can also download it!",
            'certificado-button':"Check the Certificates",
            'download-button':"Download Curriculum"
        },
        certificados:{
            'main-title':"My Certificates????",
            'resumo':"Below you can see all my course certificates I was able to complete, if you feel like it and you can download them in PDF format by clicking the button!",
            "certificado-presencial":"Classroom Course Certificates",
            'prepara-title':"Certificate Prepara Cursos",
            'certificado-online':"Online Course Certificates",
            "voltar-curriculo": "Back to curriculum"
        }
    },
    'pt-BR':{
        index:{
            'main-title': "Ol??, <br> Meu nome ?? Fernando,<br> Sou um desenvolvedor full-stack",
            'contact-button':'Entre em contato!',
            'text-paragrafo':'Desenvolvedor Back-End / Especialista em JavaScript',
            'picker-text': 'Selecione a sua cor favorita!'

        },
        about:{
            "main-title":'Um pouco sobre mim',
            'text-paragrafo':"Sou um programador localizado no Brasil, tenho uma paix??o enorme por programa????o, principalmente com o back-end, que ?? onde me desenvolvo melhor. <br><br>No geral, me considero uma pessoa t??mida, mas com o tempo me adapto melhor com as pessoas ao meu lado, gosto de brincar com os amigos, gosto tamb??m de ajudar meus amigos que est??o come??ando a programar agora, pois al??m deles aprendendo, tamb??m aprendo logo n??s todos ganham. <br><br>Meu objetivo ?? revolucionar a vida das pessoas por meio da tecnologia."
        },
        contact:{
            "main-title":'Fale comigo',
            'text-paragrafo':"Estou interessado em oportunidades freelance, especialmente projetos ambiciosos ou grandes. No entanto, se voc?? tiver qualquer outro pedido ou pergunta, pode usar o formul??rio abaixo para se comunicar comigo ou atrav??s dos outros meios de contato em a barra de menus.",
            'enviar':'Enviar',
        },
        skills:{
            "main-title":'Um pouco sobre mim',
            'text-paragrafo':`Comecei a programar gra??as a um curso que fiz aqui na minha cidade h?? aproximadamente 5 anos, desde ent??o venho estudando e me esfor??ando para conquistar meu espa??o, j?? dei aulas, trabalhei para uma empresa, fez trabalhos volunt??rios e outros para adquirir conhecimento. <br><br>Sou um desenvolvedor front-end e back-end completo, crio sistemas inteiros sozinho e estou sempre aprimorando minhas t??cnicas. <br><br>Atualmente estou programando com JavaScript usando Nodejs no Back-end. Tamb??m desenvolvo com HTML, CSS e JavaScript puro. <br><br>Possuo tamb??m outros conhecimentos como Hospedagem, Firebase, bancos de dados relacionais e n??o relacionais, APIS.`,
            'work-title': 'Desenvolvedor Full-Stack',
            'work-resume': 'Contribui para o desenvolvimento de um sistema na plataforma que atendeu redes de ensino no Brasil.'
        },
        work:{
            "twitter-descricao":"Esse e um clone do Twitter que tem como objetivo fazer as principais funcionalidades do Back-End alem de expandir meus conhecimentos, <b><br><br>Para ver o reposit??rio  clique no card que voc?? ser?? redirecionado!</b>",
            "infoeduc-descricao":"InfoEduc foi uma empresa que eu trabalhei aqui em minha cidade aonde minha fun????o era desenvolver plugins e templates para a plataforma principal de educa????o da empresa. <b><br><br>Para ver a plataforma clique no card que voc?? ser?? redirecionado!</b>",
            "spotify-descricao":"O clone do spotify foi o meu primeiro projeto quando realmente comecei a programar me ajudou muito principalmente com o back-end em nodejs e gra??as a ele tamb??m consegui meu antigo emprego, atualmente vejo v??rios problemas nele pois eu n??o tinha todos os conhecimentos na ??poca por??m ainda esta bem funcional.<b><br><br>Para ver o reposit??rio  clique no card que voc?? ser?? redirecionado!</b>",
            "work-title":"Abaixo s??o alguns dos meus trabalhos ou projetos pessoais.",
            "work-subTitle":"Voc?? pode passar o mouse sobre os cards para saber mais ou clicar nos mesmos para ser redirecionado ou para o reposit??rio ou para uma p??gina web.",
            "portifolio-descricao":"Clicando voc?? pode ver o c??digo fonte do portf??lio"
        },
        curriculo:{
            'main-title':"Meu Curriculo! &#x2661;",
            'resumo':"Aqui voce pode ver o preview do meu curriculo e caso deseje tambem pode ser feito o download do mesmo!",
            'certificado-button':"Conferir os Certificados",
            'download-button':"Baixar Curr??culo"
        },
        certificados:{
            'main-title':"Meus Certificados????",
            'resumo':"Abaixo ?? poss??vel ver todos os meus certificados de cursos que pude concluir, caso tenha vontade e poss??vel baix??-los no formato PDF ao clicar no bot??o!",
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
                    let textIndex = textLangs["en-US"].index
                    document.querySelector('#contact-button').innerHTML = textIndex["contact-button"]
                    document.querySelector('#main-title').innerHTML = textIndex["main-title"]
                    document.querySelector('#text-paragrafo').innerHTML = textIndex["text-paragrafo"]
                    document.querySelector('#picker-text').innerHTML = textIndex["picker-text"]
                    break;

                case 1:
                    let textabout = textLangs["en-US"].about
                    document.querySelector('#main-title').innerHTML = textabout["main-title"]
                    document.querySelector('#text-paragrafo').innerHTML = textabout["text-paragrafo"]
                    break;

                case 2:
                    let textskills = textLangs["en-US"].skills
                    document.querySelector('#main-title').innerHTML = textskills["main-title"]
                    document.querySelector('#text-paragrafo').innerHTML = textskills["text-paragrafo"]
                    document.querySelector('#work-resume').innerHTML = textskills["work-resume"]
                    document.querySelector('#work-title').innerHTML = textskills["work-title"]
                    break;

                case 3:
                    let textwork = textLangs["en-US"].work
                    document.querySelector('#twitter-descricao').innerHTML = textwork["twitter-descricao"]
                    document.querySelector('#infoeduc-descricao').innerHTML = textwork["infoeduc-descricao"]
                    document.querySelector('#spotify-descricao').innerHTML = textwork["spotify-descricao"]
                    document.querySelector('#work-title').innerHTML = textwork["work-title"]
                    document.querySelector('#work-subTitle').innerHTML = textwork["work-subTitle"]
                    document.querySelector('#portifolio-descricao').innerHTML = textwork["portifolio-descricao"]
                    break;

                case 4:
                    let textcurriculo = textLangs["en-US"].curriculo
                    document.querySelector('#main-title').innerHTML = textcurriculo["main-title"]
                    document.querySelector('#resumo').innerHTML = textcurriculo["resumo"]
                    document.querySelector('#certificado-button').innerHTML = textcurriculo["certificado-button"]
                    document.querySelector('#download-button').innerHTML = textcurriculo["download-button"]
                    break;

                case 5:
                    let textcontact = textLangs["en-US"].contact
                    document.querySelector('#main-title').innerHTML = textcontact["main-title"]
                    document.querySelector('#text-paragrafo').innerHTML = textcontact["text-paragrafo"]
                    document.querySelector('#enviar').innerHTML = textcontact.enviar
                    break;
                case 6:
                    let textcertificado = textLangs["en-US"].certificados
                    document.querySelector('#main-title').innerHTML = textcertificado["main-title"]
                    document.querySelector('#resumo').innerHTML = textcertificado["resumo"]
                    document.querySelector('#certificado-presencial').innerHTML = textcertificado["certificado-presencial"]
                    document.querySelector('#prepara-title').innerHTML = textcertificado["prepara-title"]
                    document.querySelector('#certificado-online').innerHTML = textcertificado["certificado-online"]
                    document.querySelector('#voltar-curriculo').innerHTML = textcertificado["voltar-curriculo"]
                    break;
            }
            break;
        case 'pt-BR':
            document.querySelector('html').setAttribute('lang', 'pt-BR')
            langSelected.src = '../public/assets/svgs/BR.svg'
            switch (index) {
                case 0:
                    let textIndex = textLangs["pt-BR"].index
                    document.querySelector('#contact-button').innerHTML = textIndex["contact-button"]
                    document.querySelector('#main-title').innerHTML = textIndex["main-title"]
                    document.querySelector('#text-paragrafo').innerHTML = textIndex["text-paragrafo"]
                    document.querySelector('#picker-text').innerHTML = textIndex["picker-text"]
                    break;

                case 1:
                    let textabout = textLangs["pt-BR"].about
                    document.querySelector('#main-title').innerHTML = textabout["main-title"]
                    document.querySelector('#text-paragrafo').innerHTML = textabout["text-paragrafo"]
                    break;

                case 2:
                    let textskills = textLangs["pt-BR"].skills
                    document.querySelector('#main-title').innerHTML = textskills["main-title"]
                    document.querySelector('#text-paragrafo').innerHTML = textskills["text-paragrafo"]
                    document.querySelector('#work-resume').innerHTML = textskills["work-resume"]
                    document.querySelector('#work-title').innerHTML = textskills["work-title"]
                    break;

                case 3:
                    let textwork = textLangs["pt-BR"].work
                    document.querySelector('#twitter-descricao').innerHTML = textwork["twitter-descricao"]
                    document.querySelector('#infoeduc-descricao').innerHTML = textwork["infoeduc-descricao"]
                    document.querySelector('#spotify-descricao').innerHTML = textwork["spotify-descricao"]
                    document.querySelector('#work-title').innerHTML = textwork["work-title"]
                    document.querySelector('#work-subTitle').innerHTML = textwork["work-subTitle"]
                    document.querySelector('#portifolio-descricao').innerHTML = textwork["portifolio-descricao"]
                    break;

                case 4:
                    let textcurriculo = textLangs["pt-BR"].curriculo
                    document.querySelector('#main-title').innerHTML = textcurriculo["main-title"]
                    document.querySelector('#resumo').innerHTML = textcurriculo["resumo"]
                    document.querySelector('#certificado-button').innerHTML = textcurriculo["certificado-button"]
                    document.querySelector('#download-button').innerHTML = textcurriculo["download-button"]
                    break;

                case 5:
                    let textcontact = textLangs["pt-BR"].contact
                    document.querySelector('#main-title').innerHTML = textcontact["main-title"]
                    document.querySelector('#text-paragrafo').innerHTML = textcontact["text-paragrafo"]
                    document.querySelector('#enviar').innerHTML = textcontact.enviar
                    break;
                case 6:
                    let textcertificado = textLangs["pt-BR"].certificados
                    document.querySelector('#main-title').innerHTML = textcertificado["main-title"]
                    document.querySelector('#resumo').innerHTML = textcertificado["resumo"]
                    document.querySelector('#certificado-presencial').innerHTML = textcertificado["certificado-presencial"]
                    document.querySelector('#prepara-title').innerHTML = textcertificado["prepara-title"]
                    document.querySelector('#certificado-online').innerHTML = textcertificado["certificado-online"]
                    document.querySelector('#voltar-curriculo').innerHTML = textcertificado["voltar-curriculo"]
                    break;
            }
            break;

    }
}
document.getElementById('lang-containner').addEventListener('click',()=>{
    document.getElementById('lang-containner').style.display = 'none'
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
