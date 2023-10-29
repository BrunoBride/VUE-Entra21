const r = require('prompt-sync')
const prompt = r()

// Faça um programa que solicite ao usuário um número e calcule 
// e exiba o quadrado desse número

let num = Number(prompt('Digite um número: '))
console.log(`A raiz quadrade de ${num} é ${Math.sqrt(num,2)}`)