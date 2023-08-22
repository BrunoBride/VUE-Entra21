
const promptCall = require('prompt-sync')
const prompt = promptCall()

// 9.	Faça um programa que solicite ao usuário 
//      um número inteiro e exiba o resultado da multiplicação desse número por 3.

let numero1 = Number(prompt('Digite um número: '))


let calc = numero1 * 3

console.log('A multiplicação do número por 3 é: '+ calc)




