document.getElementById('containner').innerHTML += `<div style="position: absolute; left: 50%; transform: translate(-50%, -50%); z-index: 100; " id="notify-containner"></div>` 


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
if (location.pathname == '/') {
    mensage()
}

function mensage() {
    document.getElementById('notify-containner').innerHTML = ` <div id="notificacao-mensage" style="position: absolute; top: -50px; left: 50%; transform: translate(-50%, -50%); transition: 1s; z-index: 100; white-space: nowrap; font-size: 1.2em; color: #fff; text-shadow: 0px 0px 25px #fff; font-weight: bold; font-family: 'Inter', sans-serif;">${idioma == "pt-BR" ? lang["pt-BR"].mensage : lang["en-US"].mensage}</div>`
    
    setTimeout(()=>{     
        document.getElementById('notificacao-mensage').style.top = "30px"
    }, 0100);
    setTimeout(()=>{     
        document.getElementById('notificacao-mensage').style.top ="-50px"
        setTimeout(()=>{     
            document.getElementById('notify-containner').innerHTML =""
    
        }, 1000);
    }, 5000);
}

function saveNot() {
    document.getElementById('notify-containner').innerHTML = ` <div id="notificacao-save" style="position: absolute; top: -50px; left: 50%; transform: translate(-50%, -50%); transition: 1s; z-index: 100; white-space: nowrap; font-size: 1.2em; color: #00ff00; text-shadow: 0px 0px 25px #00ff00; font-weight: bold; font-family: 'Inter', sans-serif;">${idioma == "pt-BR" ? lang["pt-BR"].save : lang["en-US"].save }</div>`
    
    setTimeout(()=>{     
        document.getElementById('notificacao-save').style.top = "30px"

    }, 0100);
    setTimeout(()=>{     
        document.getElementById('notificacao-save').style.top ="-50px"
        setTimeout(()=>{     
            document.getElementById('notify-containner').innerHTML =""
    
        }, 1000);
    }, 5000);
}
function contact() {
    document.getElementById('notify-containner').innerHTML = ` <div id="notificacao-contact" style="position: absolute; top: -50px; left: 50%; transform: translate(-50%, -50%); transition: 1s; z-index: 100; white-space: nowrap; font-size: 1.2em; color: #00ff00; text-shadow: 0px 0px 25px #00ff00; font-weight: bold; font-family: 'Inter', sans-serif;">${idioma == "pt-BR" ? lang["pt-BR"].contact : lang["en-US"].contact }</div>`
    
    setTimeout(()=>{     
        document.getElementById('notificacao-contact').style.top = "30px"

    }, 0100);
    setTimeout(()=>{     
        document.getElementById('notificacao-contact').style.top ="-50px"
        setTimeout(()=>{     
            document.getElementById('notify-containner').innerHTML =""
    
        }, 1000);
    }, 5000);
}

