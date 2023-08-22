const req = require('prompt-sync')
const prompt = req()

// Faça um programa que solicite ao usuário 
// dois números inteiros e exiba a soma dos dois.

let n1 = Number(prompt('Digite um numero'))
let n2 = Number(prompt('Digite um numero'))

let soma = n1 + n2

console.log('A soma dos dois números é: '+soma)

console.log(`${n1} + ${n2} =  ${n1+n2}`)//interpolação

console.log(n1 + ' + ' + n2 + ' = ' + soma)//Concatenação




