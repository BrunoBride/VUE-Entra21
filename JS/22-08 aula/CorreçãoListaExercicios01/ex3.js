const req = require('prompt-sync')
const prompt = req()

// Faça um programa que peça ao usuário um número 
// e calcule e exiba a raiz quadrada desse número.

let num = Number(prompt('Digite um numero: '))
let raiz = Math.sqrt(num)
console.log(`Raiz de ${num} é ${raiz}`)

