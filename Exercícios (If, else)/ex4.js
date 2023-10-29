const r = require('prompt-sync')
const prompt = r()

//Escreva um programa que solicite ao usuário o valor de três números
// inteiros diferentes e exiba o resultado da soma dos três números.

let n1 = Number(prompt('Digite um número: '))
let n2 = Number(prompt('Digite outro número: '))
let n3 = Number(prompt('Digite um último número: '))

console.log(`A soma de ${n1} + ${n2} + ${n3} é igual a ${n1+n2+n3}`)