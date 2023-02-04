var colorSec = localStorage.getItem('color-sec')
var full_colors = [
    {
        nome:'select',
        hex:null
    },
    {
        nome:'roxo',
        hex: '#9055FF'
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
        nome:'verde',
        hex:'#15f700'
    },
]

if (document.getElementById('index').value == 0) {
    document.getElementById('newColor').addEventListener('click',()=>{
        document.getElementById('color-input').click()
    })
    let inputColor = document.getElementById('color-input') 

    inputColor.addEventListener('change',()=>{
        localStorage.setItem('color-sec', inputColor.value)
        full_colors[0].hex = inputColor.value
        document.getElementById('color-sec').style.backgroundColor = inputColor.value
        if (localStorage.getItem('color') == 'select') {
            document.body.style.setProperty('--color-secundary', inputColor.value);
        }else{
            localStorage.setItem('color', "select")
            colorVerification()
        }
        
    })
    

    if (colorSec == null || colorSec == undefined) {
        
    }else{
        full_colors[0].hex = colorSec
        document.getElementById('color-sec').style.backgroundColor = colorSec
    }
}






colorVerification()
function colorVerification() {
    let color = localStorage.getItem('color')
    
    if (color == null || color == undefined) {
        localStorage.setItem('color', 'roxo');
    }
   
    let other_colors = []
    var hex = null
    full_colors.forEach(item=>{
        if (item.nome == color) {
            hex = item.hex
        }else{
            other_colors.push(item)
        }
    })
    if (color == 'select') {
        hex = colorSec
    }
    document.body.style.setProperty('--color-secundary', hex);
    if (document.getElementById('index').value == 0) {
        document.querySelector(`[data-color=${other_colors[0].nome}]`).classList.remove('color-selected')
        document.querySelector(`[data-color=${other_colors[1].nome}]`).classList.remove('color-selected')
        document.querySelector(`[data-color=${other_colors[2].nome}]`).classList.remove('color-selected')
        document.querySelector(`[data-color=${other_colors[3].nome}]`).classList.remove('color-selected')
        document.querySelector(`[data-color=${color}]`).classList.toggle('color-selected')
    }
}


document.querySelectorAll('.colors').forEach(item=>{
    item.addEventListener('click',()=>{
        let color = item.getAttribute('data-color')
        localStorage.setItem('color', color);
        saveNot()
        colorVerification()
    })
})