const req = require('prompt-sync')
const prompt = req()

// Faça um programa que solicite ao usuário um 
// número real e imprima a metade desse número

let num = Number(prompt('Digite um numero real'))
console.log(`A metade de ${num} é ${num/2}`)

let texto = "O resultado é: "
let maisTexto = "!!!!!!!!!!!!!!!!"

console.log(texto+(num/2)+maisTexto)

