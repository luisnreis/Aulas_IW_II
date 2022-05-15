var nota = Number(prompt('Digite uma nota.'))

while (nota<0 || nota>10) {
    nota = Number(prompt('Digite uma nota.'))
}

document.write('Chegamos ao fim do programa e aqui estão os resultados:<br>')
document.write(`A nota digitada foi: ${nota}`)