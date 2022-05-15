var A = Number(prompt('Digite a população do país A:'))
var B = Number(prompt('Digite a população do país B:'))
var taxaA = Number(prompt('Digite a taxa de crescimento populacional A:'))
var taxaB = Number(prompt('Digite a taxa de crescimento populacional B:'))
var ano = 0

if(B > A)
{
    while(B > A)
    {
        A = A + ((A / 100) * taxaA)
        B = B + ((B / 100) * taxaB)
        ano = ano + 1
    }
}
else
{
    while(A > B)
    {
        A = A + ((A / 100) * taxaA)
        B = B + ((B / 100) * taxaB)
        ano = ano + 1    
    }
}

document.write(`Serão <strong>${ano} anos</strong> para que a população dos países se igualem ou a menor passe a maior.`)