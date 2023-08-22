const req = require('prompt-sync')
const prompt = req()

// Escreva um programa que solicite ao usuário o valor de três 
// números inteiros diferentes e exiba o resultado da soma dos três números.

let num1 = Number(prompt('Digite o 1º número: '))
let num2 = Number(prompt('Digite o 2º número: '))
let num3 = Number(prompt('Digite o 3º número: '))

let resultado = num1 + num2 + num3

console.log(`${num1} + ${num2} + ${num3} = ${resultado}`)

