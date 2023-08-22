const req = require('prompt-sync')
const prompt = req()

// Faça um programa que solicite ao usuário um número inteiro 
// e exiba o resultado da multiplicação desse número por 3.

let num = Number(prompt('Digite um numero: '))

console.log(`${num} x 3 = ${num*3}`)