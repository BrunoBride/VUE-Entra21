const r = require('prompt-sync')
const prompt = r()

// Escreva um programa que peça ao usuário dois números inteiros 
// e exiba o resultado da divisão do primeiro número pelo segundo

let n1 = Number(prompt('Digite um número: '))
let n2 = Number(prompt('Digite outro número: '))

console.log(`A divisão de ${n1} por ${n2} é igual a ${n1/n2}`)