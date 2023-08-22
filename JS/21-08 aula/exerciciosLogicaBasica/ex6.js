
const promptCall = require('prompt-sync')
const prompt = promptCall()

// 6.	Escreva um programa que peça ao usuário dois números inteiros
//      e exiba o resultado da divisão do primeiro número pelo segundo.

let numero1 = Number(prompt('Digite o primeiro número: '))
let numero2 = Number(prompt('Digite o segundo número: '))

console.log('A divisão dos números é: '+ (numero1 / numero2))




