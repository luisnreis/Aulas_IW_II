var A = 80000
var B = 200000
var taxaA = 0.03
var taxaB = 0.015
var ano = 0

do {
    A = (A * taxaA) + A
    B = (B * taxaB) + B
    ano = ano + 1
} while (A<=B);
document.write('Chegamos ao fim do programa e aqui estão os resultados:<br>')
document.write(`Serão <strong>${ano} anos</strong> para que o país A igualasse ou ultrapassasse o país B`)