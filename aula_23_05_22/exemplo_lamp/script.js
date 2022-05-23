var botao = document.getElementById('botao')
var lamp = document.getElementById('lamp')
var cont = document.getElementById("cont")

botao.onclick = function() {
    if (botao.value == 'Acender') {
        lamp.src = 'img/acesa.png'
        botao.value = 'Apagar'
        botao.innerHTML = 'APAGAR'
        cont.style.background = 'white'
    }else{
        lamp.src = 'img/apagada.png'
        botao.value = 'Acender'
        botao.innerHTML = 'ACENDER'
        cont.style.background = 'black'
    }
}