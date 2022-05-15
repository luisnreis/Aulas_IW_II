var tab = Number(prompt('Digite um número inteiro de 1 a 10 que deseja ver a tabuada'));

while (tab < 0 || tab > 10) {
    var tab = Number(prompt('Digite um número inteiro ENTRE 1 a 10 que deseja ver a tabuada'));
}
if (tab > 0 || tab < 10) {
    document.write(`Confira a tabuada do ${tab}:<br>`);
    for (var num = 1; num <= 10; num++) {
    res = (tab * num)
    document.write(`<br>${tab} x ${num} = ${res}`)
    }
}
    