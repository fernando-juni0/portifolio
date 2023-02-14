document.getElementById('form').addEventListener('submit',(e)=>{contact()})


document.getElementById('idioma').value = localStorage.getItem('lang')

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
var color = localStorage.getItem('color')
if (color == 'select') {
    full_colors[0].hex = localStorage.getItem('color-sec')
}

let colorSelected = full_colors.find((item)=> {return item.nome == color})


document.getElementById('color').value = colorSelected.hex
