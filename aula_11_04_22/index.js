var area = document.getElementById('area')
function clicar(){
    area.innerHTML = 'Clicaste!'
    area.style.background = 'green'
    area.style.color = 'snow'
}

function entrar(){
    area.innerText = 'Entraste!'
    area.style.background = 'yellow'
    area.style.color = 'black'
}

function sair(){
    area.innerHTML = 'Saiste!'
    area.style.background = 'blue'
    area.style.color = 'snow'
}