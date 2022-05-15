var cont = 0
var contI = 0
var contP = 0

for (var cont = 1; cont <= 10; cont++) {
    var num = Number(prompt('Digite um número...'))
    if (num % 2 == 1) {
        contI = contI+1
    } else {
        contP = contP+1
    }
}
document.write('Chegamos ao fim do programa e aqui estão os resultados:<br>')
document.write(`Foram um total de ${contP} números pares.<br>`)
document.write(`Foram um total de ${contI} números ímpares.<br>`)