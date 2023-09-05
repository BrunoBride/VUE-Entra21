const req = require('prompt-sync')
const prompt =  req()
// Faça um programa que peça ao usuário para digitar 
// um número e imprima a tabuada desse número usando um loop while.

let num  = Number(prompt('Digite um número'))

let i = 0

while(i < 10){
    i++
    let resultado = num * i
    console.log(`${num} x ${i} = ${resultado}`)
}
