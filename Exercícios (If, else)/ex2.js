const r = require('prompt-sync')
const prompt = r()

//Escreva um programa que peça ao usuário um número e 
// imprima o resultado da multiplicação desse número por 10

let num = Number(prompt('Digite um número: '))

console.log(`O ${num} multiplicado por 10 é igual a ${num*10}`)