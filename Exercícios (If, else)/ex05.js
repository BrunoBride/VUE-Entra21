const r = require('prompt-sync')
const prompt = r()

// Faça um programa que solicite ao usário um número real 
// e imprima a metade desse número

let num = Number(prompt('Digite um número (podendo ser também os Reais): '))

console.log(`A metade de ${num} é igual a ${num/2}`)