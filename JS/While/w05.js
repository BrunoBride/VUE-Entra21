const prompt = require('prompt-sync')()

// 5.	Altere o programa anterior permitindo ao usuário informar 
// as populações e as taxas de crescimento iniciais. 
// Valide a entrada e permita repetir a operação.


let paisA = prompt('Digite a população do país A: ')
let txCresPA = Number(prompt('Digite a taxa de Crescimento anual do país A: ')) / 100
console.log(txCresPA)
let paisB = prompt('Digite a população do país B: ')
let txCresPB = Number(prompt('Digite a taxa de Crescimento anual do país B: ')) / 100
console.log(txCresPB)
let ano = 0
while (paisA <= paisB) {
    paisA += (paisA * txCresPA)
    paisB += (paisB * txCresPB)
    ano++
}
console.log(`O país A ultrapassa ou iguala ao país B em ${ano} anos`)
// nao 