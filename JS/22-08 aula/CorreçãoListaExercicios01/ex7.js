const req = require('prompt-sync')
const prompt = req()


// Faça um programa que solicite ao usuário um número 
// e calcule e exiba o quadrado desse número.

let num = Number(prompt('Digite um numero: '))
console.log(`${num}² = ${num*num}`)
// console.log(`${num}² = ${Math.pow(num,2)}`)