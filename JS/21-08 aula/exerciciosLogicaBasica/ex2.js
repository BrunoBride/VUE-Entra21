
const promptCall = require('prompt-sync')
const prompt = promptCall()

// 2.	Escreva um programa que peça ao usuário um 
// número e imprima o resultado da multiplicação desse número por 10.

let numero1 = Number(prompt('Digite o um número: '))

for (let i = 1; i <=10; i++){
    console.log( numero1 + " x " + i + " = " + (numero1*i)) 
}






