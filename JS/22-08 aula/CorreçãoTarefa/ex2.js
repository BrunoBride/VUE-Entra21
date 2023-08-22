const req = require('prompt-sync')
const prompt = req()

// Criar um programa que permita o usuário
// entrar com o valor do altura e da base de um retângulo
// e calcule sua área.

let b = Number(prompt('DIgite o valor da base do retângulo: '))
let h = Number(prompt('DIgite o valor da altura do retângulo: '))

let a = b * h

console.log(`A área do retângulo é ${a}m²`)