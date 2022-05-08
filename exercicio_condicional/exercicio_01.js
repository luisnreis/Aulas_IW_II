var letra = (prompt('Digite uma letra'))

var l = letra.toUpperCase()
if (l == 'A'||l == 'E'||l == 'I'||l == 'O'||l == 'U') {
    document.write(`<center>A letra digitada foi ${l} <br></center>`)
    document.write('<center>Essa letra é uma vogal.</center>')
} else {
    document.write('<center>Essa letra é uma consoante</center>')
}