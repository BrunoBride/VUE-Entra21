
const promptCall = require('prompt-sync')
const prompt = promptCall()

// 8.	Escreva um programa que peça ao usuário dois números reais
//      e exiba o resultado da multiplicação dos dois.

let numero1 = Number(prompt('Digite o primeiro número: '))
let numero2 = Number(prompt('Digite o segundo número: '))

console.log('A multiplicação dos números é: '+ (numero1 * numero2))




