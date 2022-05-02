var letra = (prompt('Digite uma letra'))

var l = letra.toUpperCase()
if (l == 'A'||l == 'E'||l == 'I'||l == 'O'||l == 'U') {
    document.write('Essa letra é uma vogal.')
} else {
    document.write('Essa letra é uma consoante')
}