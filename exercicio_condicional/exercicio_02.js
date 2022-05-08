var sal = parseInt(prompt('Digite o seu salário.'))

if (sal != 0) {
    if (sal <= 280) {
        var porc = parseInt(sal * 20) / 100
        var novosal = (porc + sal)
        document.write(`<center>O salário antes do reajuste era de ${sal}.<br></center>`)
        document.write('<center>O aumento será de 20%.<br></center>')
        document.write(`<center>O valor do aumento será de ${porc}.<br></center>`)
        document.write(`<center>O novo salário será de ${novosal}.</center>`)
    } 
    
    if (sal > 280 && sal <= 700) {
        var porc = parseInt(sal * 15) / 100
        var novosal = (porc + sal)
        document.write(`<center>O salário antes do reajuste era de ${sal}.<br></center>`)
        document.write('<center>O aumento será de 15%.<br></center>')
        document.write(`<center>O valor do aumento será de ${porc}.<br></center>`)
        document.write(`<center>O novo salário será de ${novosal}.</center>`)
    }
    if (sal > 700 && sal < 1500) {
        var porc = parseInt(sal * 10) / 100
        var novosal = (porc + sal)
        document.write(`<center>O salário antes do reajuste era de ${sal}.<br></center>`)
        document.write('<center>O aumento será de 10%.<br></center>')
        document.write(`<center>O valor do aumento será de ${porc}.<br></center>`)
        document.write(`<center>O novo salário será de ${novosal}.</center>`)
    }
    if (sal >= 1500) {
        var porc = parseInt(sal * 5) / 100
        var novosal = (porc + sal)
        document.write(`<center>O salário antes do reajuste era de ${sal}.<br></center>`)
        document.write('<center>O aumento será de 5%.<br></center>')
        document.write(`<center>O valor do aumento será de ${porc}.<br></center>`)
        document.write(`<center>O novo salário será de ${novosal}.</center>`)
    }
}