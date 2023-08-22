const req = require('prompt-sync')
const prompt = req()

// Criar um programa que permita o usuário
// entrar com o valor do raio de um círculo
// e calcule sua área.

let r = Number(prompt('Digite o valor do raio do círculo: '))
let area = Math.PI * r * r

console.log(`O círculo tem ${area}m² de área!`)