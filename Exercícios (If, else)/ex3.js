const r = require('prompt-sync')
const prompt = r()

// Faça um programa que peça ao 
// usuário um número e calcule e exiba a 
// raiz quadrada desse número

let num = Number(prompt('Digite um número: '))
console.log(`A raiz quadrada de ${num} é igual a ${Math.sqrt(num,2)}`)