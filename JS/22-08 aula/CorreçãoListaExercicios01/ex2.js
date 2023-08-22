const req = require('prompt-sync')
const prompt = req()

// Escreva um programa que peça ao usuário um número 
// e imprima o resultado da multiplicação desse número por 10.

let num = Number(prompt('Digite um número'))

console.log(`${num} * 1 = ${num*1}`)
console.log(`${num} * 2 = ${num*2}`)
console.log(`${num} * 3 = ${num*3}`)
console.log(`${num} * 4 = ${num*4}`)
console.log(`${num} * 5 = ${num*5}`)
console.log(`${num} * 6 = ${num*6}`)
console.log(`${num} * 7 = ${num*7}`)
console.log(`${num} * 8 = ${num*8}`)
console.log(`${num} * 9 = ${num*9}`)
console.log(`${num} * 10 = ${num*10}`)
