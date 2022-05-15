var b = Number(prompt('Digite a base'))
var e = Number(prompt('Digite o expoente'))
var cont = 0
var res = b

for (var cont = 1; cont < e; cont++){
    res = b * b
    res = res * b
}

document.write(`${b}^${e} é = ${res}`)