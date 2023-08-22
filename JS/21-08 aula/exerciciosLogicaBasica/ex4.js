//função do prompt
const promptCall = require('prompt-sync')
const prompt = promptCall()

// 4.	Escreva um programa que solicite ao usuário o valor de três números 
//      inteiros diferentes e exiba o resultado da soma dos três números.

let num1 = Number(prompt('Digite um primeiro número: '))
let num2 = Number(prompt('Digite um segundo número diferente do anterior: '))
let num3 = Number(prompt('Digite um terceiro número diferente dos anteriores: '))

console.log('A soma dos valores informados é: '+(num1+num2+num3))