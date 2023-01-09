var open_lang_popup = false
var langSelected = document.getElementById('lang_selected')
var index = document.getElementById('index').value


var textLangs = {
    'en-US':{
        index:{
            'main-title': "Hello, <br> My name is Fernando,<br> I'm a full-stack developer",
            'contact-button':'Contact Me!',
            'text-paragrafo':'Back-End Developer / JavaScript Expert'
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
        }
    },
    'pt-BR':{
        index:{
            'main-title': "Olá, <br> Meu nome é Fernando,<br> Sou um desenvolvedor full-stack",
            'contact-button':'Entre em contato!',
            'text-paragrafo':'Desenvolvedor Back-End / Especialista em JavaScript'
        },
        about:{
            "main-title":'Um pouco sobre mim',
            'text-paragrafo':"Sou um programador localizado no Brasil, tenho uma paixão enorme por programação, principalmente com o back-end, que é onde me desenvolvo melhor. <br><br>No geral, me considero uma pessoa tímida, mas com o tempo me adapto melhor com as pessoas ao meu lado, gosto de brincar com os amigos, gosto também de ajudar meus amigos que estão começando a programar agora, pois além deles aprendendo, também aprendo logo nós todos ganham. <br><br>Meu objetivo é revolucionar a vida das pessoas por meio da tecnologia."
        },
        contact:{
            "main-title":'Fale comigo',
            'text-paragrafo':"Estou interessado em oportunidades freelance, especialmente projetos ambiciosos ou grandes. No entanto, se você tiver qualquer outro pedido ou pergunta, pode usar o formulário abaixo para se comunicar comigo ou através dos outros meios de contato em a barra de menus.",
            'enviar':'Enviar',
        },
        skills:{
            "main-title":'Um pouco sobre mim',
            'text-paragrafo':`Comecei a programar graças a um curso que fiz aqui na minha cidade há aproximadamente 5 anos, desde então venho estudando e me esforçando para conquistar meu espaço, já dei aulas, trabalhei para uma empresa, fez trabalhos voluntários e outros para adquirir conhecimento. <br><br>Sou um desenvolvedor front-end e back-end completo, crio sistemas inteiros sozinho e estou sempre aprimorando minhas técnicas. <br><br>Atualmente estou programando com JavaScript usando Nodejs no Back-end. Também desenvolvo com HTML, CSS e JavaScript puro. <br><br>Possuo também outros conhecimentos como Hospedagem, Firebase, bancos de dados relacionais e não relacionais, APIS.`,
            'work-title': 'Desenvolvedor Full-Stack',
            'work-resume': 'Contribui para o desenvolvimento de um sistema na plataforma que atendeu redes de ensino no Brasil.'
        }
    }
}







langVerification()
function langVerification(){
    const idioma = localStorage.getItem('lang')
    console.log(idioma);
    if (idioma == null || idioma == undefined) {
        let navLang = window.navigator.language
        localStorage.setItem('lang', navLang);
    }
    if (idioma == 'en-US') {
        langSelected.src = '../public/assets/US.svg'
        if (index == 0) {
            let textIndex = textLangs["en-US"].index
            document.querySelector('#contact-button').innerHTML = textIndex["contact-button"]
            document.querySelector('#main-title').innerHTML = textIndex["main-title"]
            document.querySelector('#text-paragrafo').innerHTML = textIndex["text-paragrafo"]
            return
        }
        if (index == 1) {
            let textabout = textLangs["en-US"].about
            document.querySelector('#main-title').innerHTML = textabout["main-title"]
            document.querySelector('#text-paragrafo').innerHTML = textabout["text-paragrafo"]
            return
        }
        if (index == 2) {
            let textskills = textLangs["en-US"].skills
            document.querySelector('#main-title').innerHTML = textskills["main-title"]
            document.querySelector('#text-paragrafo').innerHTML = textskills["text-paragrafo"]
            document.querySelector('#work-resume').innerHTML = textskills["work-resume"]
            document.querySelector('#work-title').innerHTML = textskills["work-title"]
            return
        }
        if (index == 4) {
            let textcontact = textLangs["en-US"].contact
            document.querySelector('#main-title').innerHTML = textcontact["main-title"]
            document.querySelector('#text-paragrafo').innerHTML = textcontact["text-paragrafo"]
        
            document.querySelector('#enviar').innerHTML = textcontact.enviar
            return
        }
    }else if (idioma == 'pt-BR') {
        langSelected.src = '../public/assets/BR.svg'
        if (index == 0) {
            let textIndex = textLangs["pt-BR"].index
            document.querySelector('#contact-button').innerHTML = textIndex["contact-button"]
            document.querySelector('#main-title').innerHTML = textIndex["main-title"]
            document.querySelector('#text-paragrafo').innerHTML = textIndex["text-paragrafo"]
        }
        if (index == 1) {
            let textabout = textLangs["pt-BR"].about
            document.querySelector('#main-title').innerHTML = textabout["main-title"]
            document.querySelector('#text-paragrafo').innerHTML = textabout["text-paragrafo"]
            return
        }
        if (index == 2) {
            let textskills = textLangs["pt-BR"].skills
            document.querySelector('#main-title').innerHTML = textskills["main-title"]
            document.querySelector('#text-paragrafo').innerHTML = textskills["text-paragrafo"]
            document.querySelector('#work-resume').innerHTML = textskills["work-resume"]
            document.querySelector('#work-title').innerHTML = textskills["work-title"]
            return
        }
        if (index == 4) {
            let textcontact = textLangs["pt-BR"].contact
            document.querySelector('#main-title').innerHTML = textcontact["main-title"]
            document.querySelector('#text-paragrafo').innerHTML = textcontact["text-paragrafo"]
        
            document.querySelector('#enviar').innerHTML = textcontact.enviar
            return
        }
    }
}



document.getElementById('lang_selected').addEventListener('click',()=>{
    if (open_lang_popup == false) {
        document.getElementById('lang-containner').style.display = 'block'
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
            langSelected.src = '../public/assets/US.svg'
        }else if (lang == 'pt-BR') {
            langSelected.src = '../public/assets/BR.svg'
        }
        open_lang_popup = false
        document.getElementById('lang-containner').style.display = 'none'
        document.getElementById('load-containner').style.display = "flex"
        setTimeout(()=>{     
            langVerification()
            document.getElementById('load-containner').style.display = "none"
        }, 2000);
    })
})
