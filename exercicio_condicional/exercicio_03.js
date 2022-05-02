var nota1 = parseInt(prompt('Digite a primeira nota.'))
var nota2 = parseInt(prompt('Digite a segunda nota.'))
var media = (nota1+nota2) / 2

if (media >= 9 && media <=10) {
    var conc = "A"
}
if (media >= 7.5 && media < 9) {
    var conc = "B"
}
if (media >= 6 && media < 7.5) {
    var conc = "C"
}
if (media >= 4 && media < 6) {
    var conc = "D"
}
if (media >= 0 && media < 4) {
    var conc = "E"
}

switch (conc) {
    case "A":
        alert('Notas: ') + nota1 + nota2 ('\nCaraca que legal seu conceito foi A, você foi íncrivel!')
        break;
    case "B":
        alert('Caraca seu conceito foi B, você foi muito bem, mas será que você consegue um A?')
        break;
    case "C":
        alert('Poxa seu conceito foi C, você está bem mediano, deve melhorar.')
        break;
    case "D":
        alert('Poxa seu conceito foi D, você deve melhorar.')
        break;
    case "E":
        alert('Poxa seu conceito foi E, você deve melhorar M    UITO.')
        break;
    default:
        break;
}
