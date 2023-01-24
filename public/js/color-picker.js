


colorVerification()
function colorVerification() {
    let color = localStorage.getItem('color')

    if (color == null || color == undefined) {
        localStorage.setItem('color', 'roxo');
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
    let other_colors = []
    var hex = null
    full_colors.forEach(item=>{
        if (item.nome == color) {
            hex = item.hex
        }else{
            other_colors.push(item)
        }
    })
    document.body.style.setProperty('--color-secundary', hex);
    document.querySelector(`[data-color=${other_colors[0].nome}]`).classList.remove('color-selected')
    document.querySelector(`[data-color=${other_colors[1].nome}]`).classList.remove('color-selected')
    document.querySelector(`[data-color=${other_colors[2].nome}]`).classList.remove('color-selected')
    document.querySelector(`[data-color=${other_colors[3].nome}]`).classList.remove('color-selected')
    document.querySelector(`[data-color=${other_colors[4].nome}]`).classList.remove('color-selected')
    document.querySelector(`[data-color=${color}]`).classList.toggle('color-selected')
}




document.querySelectorAll('.colors').forEach(item=>{
    item.addEventListener('click',()=>{
        let color = item.getAttribute('data-color')
        localStorage.setItem('color', color);
        saveNot()
        colorVerification()
    })
})