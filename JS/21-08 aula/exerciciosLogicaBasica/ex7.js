//função do prompt
const promptCall = require('prompt-sync')
const prompt = promptCall()

// 7.	Faça um programa que solicite ao usuário um número e calcule e exiba o quadrado desse número.

let num1 = Number(prompt('Digite um número: '))

console.log('O quadrado do valor informado é: '+ Math.pow(num1,2))