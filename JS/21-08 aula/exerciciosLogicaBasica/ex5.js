//função do prompt
const promptCall = require('prompt-sync')
const prompt = promptCall()

// 5.	Faça um programa que solicite ao usuário um número real e imprima a metade desse número.

let num1 = Number(prompt('Digite um número: '))

console.log('A metade do valore informado é: '+(num1/2))