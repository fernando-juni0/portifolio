document.getElementById('containner').innerHTML += `<div id="notify-containner"></div>` 



document.getElementById('containner').innerHTML += `
<style>
    #notify-containner{ position: absolute; width: 100vw; left: 50%; transform: translate(-50%, -50%); z-index: 100; }
    #notificacao-mensage{ position: absolute; width: 80vw; text-align: center; top: -50px; left: 50%; transform: translate(-50%, -50%); transition: 1s; z-index: 100;  font-size: 1.2em;  font-weight: bold; font-family: 'Inter', sans-serif; }
</style>
`

const lang = {
    'pt-BR':{
        mensage: "Este site ainda não foi concluído então pode apresentar alguns problemas técnicos.",
        save: "Infomações Salvas!",
        contact: "Mensagem Enviada!"
    },
    'en-US':{
        mensage: "This site is not finished yet so it may have some technical issues.",
        save: "Information Saved!",
        contact: "Message sent!"
    }
}
var idioma = localStorage.getItem('lang')
document.querySelectorAll('.lang-icons').forEach((item)=>{
    item.addEventListener('click',()=>{
        setTimeout(()=>{     
            idioma = localStorage.getItem('lang')
        }, 2100);

    })
})
function time() {
    setTimeout(()=>{     
        if (document.getElementById('notificacao-mensage')) {
            document.getElementById('notificacao-mensage').style.top = "30px"
        }
        

    }, 0200);
    setTimeout(()=>{  
        if (document.getElementById('notificacao-mensage')) {
            document.getElementById('notificacao-mensage').style.top ="-50px"
        }   
        
        setTimeout(()=>{     
            document.getElementById('notify-containner').innerHTML =""
    
        }, 1000);
    }, 5000);
}

if (location.pathname == '/') {
    mensage()
}
function mensage() {
    document.getElementById('notify-containner').innerHTML = ""
    clearTimeout()
    setTimeout(()=>{     
        document.getElementById('notify-containner').innerHTML = ` <div id="notificacao-mensage" style="color: #f18c09; text-shadow: 0px 0px 25px #f18c09;">${idioma == "pt-BR" ? lang["pt-BR"].mensage : lang["en-US"].mensage}</div>`
    }, 0100);
    time() 
}

function saveNot() {
    document.getElementById('notify-containner').innerHTML = ""
    clearTimeout()
    setTimeout(()=>{     
        document.getElementById('notify-containner').innerHTML = ` <div id="notificacao-mensage" style="color: #00ff00; text-shadow: 0px 0px 25px #00ff00;">${idioma == "pt-BR" ? lang["pt-BR"].save : lang["en-US"].save }</div>`
    }, 0100);
    
    time() 
}
function contact() {
    document.getElementById('notify-containner').innerHTML = ""
    clearTimeout()
    setTimeout(()=>{     
        document.getElementById('notify-containner').innerHTML = ` <div id="notificacao-mensage" style="color: #00ff00; text-shadow: 0px 0px 25px #00ff00;">${idioma == "pt-BR" ? lang["pt-BR"].contact : lang["en-US"].contact }</div>`
    }, 0100);
    time() 
}



