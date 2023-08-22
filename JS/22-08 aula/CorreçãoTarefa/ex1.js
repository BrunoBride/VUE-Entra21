const req = require('prompt-sync')
const prompt = req()

// Criar um programa que permita o usuário
// entrar com o valor do lado de um quadrado
// e calcule sua área.

let lado = Number(prompt('Digite o valor do lado do quadrado: '))
let area = lado* lado //Math.sqrt(lado,2)

console.log(`A area do quadrado é ${area}m²`)
console.log('A area do quadrado é '+area+'m²')