
const promptCall = require('prompt-sync')
const prompt = promptCall()

// 1.	Faça um programa que solicite ao usuário
//  dois números inteiros e exiba a soma dos dois.

let numero1 = Number(prompt('Digite o primeiro número: '))
let numero2 = Number(prompt('Digite o segundo número: '))

console.log('A soma dos números é: '+ (numero1 + numero2))



