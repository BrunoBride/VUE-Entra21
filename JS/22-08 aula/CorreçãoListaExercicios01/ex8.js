const req = require('prompt-sync')
const prompt = req()

// Escreva um programa que peça ao usuário dois números
//  reais e exiba o resultado da multiplicação dos dois.


let num1 = Number(prompt('Digite o 1º número: '))
let num2 = Number(prompt('Digite o 2º número: '))

let resultado = num1*num2

console.log(`${num1} x ${num2} = ${resultado}`)