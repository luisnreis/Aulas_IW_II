var tab = Number(prompt('Digite o número que deseja ver a tabuada.'))

document.write(`Confira a tabuada do ${tab}:`)

for (var num = 1; num <= 10; num++) {
    res = (tab * num)
    document.write(`<br>${tab} x ${num} = ${res}`)
}