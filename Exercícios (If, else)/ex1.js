const r = require('prompt-sync')
const prompt = r()

// Faça um programa que solicite ao usuário 
// dois números inteiros e exiba a soma dos dois

let n1 = Number(prompt('Digite um número: '))
let n2 = Number(prompt('Digite outro número: '))
let soma = n1 + n2

console.log(`O resultado da soma de ${n1} + ${n2} é igual a ${soma}`)