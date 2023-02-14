var check = document.getElementById('checkbox')
themeVerificarion()
function themeVerificarion(){
    let themeLocal = localStorage.getItem('theme')

    if (themeLocal == 'dark') {
        document.body.setAttribute('data-theme', themeLocal);
        document.getElementById('theme-description').innerText = "Dark Mode"
        check.checked = true
    }else{
        document.body.setAttribute('data-theme', themeLocal);
        document.getElementById('theme-description').innerText = "Light Mode"
        check.checked = false
    }
}



function theme(){

    if (check.checked == true) {
        localStorage.setItem('theme', 'dark')
    }else{
        localStorage.setItem('theme', 'light')
    }
    saveNot()
    themeVerificarion()
}

