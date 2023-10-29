const r = require('prompt-sync')
const prompt = r()

// Escreva um programa que solicite ao usuário dois números reais 
// e calcule e exiba o resultado da multiplicação dos dois
let n1 = Number(prompt(`Digite um número (podendo ser Reais): `))
let n2 = Number(prompt(`Digite outro número (também incluindo Reais): `))

console.log(`A multiplicação de ${n1} e ${n2} é igual a ${n1*n2}`)