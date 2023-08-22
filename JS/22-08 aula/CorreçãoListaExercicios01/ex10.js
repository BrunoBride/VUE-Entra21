const req = require('prompt-sync')
const prompt = req()

// Escreva um programa que peça ao usuário dois números 
// inteiros e exiba o resultado da subtração do primeiro número pelo segundo.

let num1 = Number(prompt('Digite o 1º número: '))
let num2 = Number(prompt('Digite o 2º número: '))

let resultado = num1-num2

console.log(`${num1} - ${num2} = ${resultado}`)