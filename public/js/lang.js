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
            'text-paragrafo':"I'm interested in freelance opportunities, especially ambitious or large projects. however, if you have any other request or question, you can use the form below to communicate with me or through the other means of contact in the menu bar."
        }
    },
    'pt-BR':{
        index:{
            'main-title': "Olá, <br> Meu nome é Fernando,<br> Sou um desenvolvedor full-stack",
            'contact-button':'Entre em contato!',
            'text-paragrafo':'Desenvolvedor Back-End / Especialista em JavaScript'
        }
    }
}








langVerification()
function langVerification(){
    const idioma = localStorage.getItem('lang')
    if (idioma == 'en-US') {
        langSelected.src = '../public/assets/US.svg'
        if (index == 0) {
            let textIndex = textLangs["en-US"].index
            console.log(textIndex);
            document.querySelector('#contact-button').innerHTML = textIndex["contact-button"]
            document.querySelector('#main-title').innerHTML = textIndex["main-title"]
            document.querySelector('#text-paragrafo').innerHTML = textIndex["text-paragrafo"]
        }
        if (index == 1) {
            let textabout = textLangs["en-US"].about
            document.querySelector('#main-title').innerHTML = textabout["main-title"]
            document.querySelector('#text-paragrafo').innerHTML = textabout["text-paragrafo"]
        }
    }else if (idioma == 'pt-BR') {
        langSelected.src = '../public/assets/BR.svg'
        if (index == 0) {
            let textIndex = textLangs["pt-BR"].index
            console.log(textIndex);
            document.querySelector('#contact-button').innerHTML = textIndex["contact-button"]
            document.querySelector('#main-title').innerHTML = textIndex["main-title"]
            document.querySelector('#text-paragrafo').innerHTML = textIndex["text-paragrafo"]
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
        langVerification()
    })
})
