var sal = parseInt(prompt('Digite o seu salário.'))


if (sal != 0) {
    if (sal <= 280) {
        var sal2 = parseInt(sal * 20) / 100
        var novosal = (sal2 + sal)
        document.write(novosal)
    } 
    
    if (sal > 280 && sal < 700) {
        var sal2 = parseInt(sal * 15) / 100
        var novosal = (sal2 + sal)
        document.write(novosal)
    }
    if (sal > 700 && sal < 1500) {
        var sal2 = parseInt(sal * 10) / 100
        var novosal = (sal2 + sal)
        document.write(novosal)
    }
    if (sal >= 1500) {
        var sal2 = parseInt(sal * 5) / 100
        var novosal = (sal2 + sal)
        document.write(novosal)
    }
}