const prompt = require('prompt-sync')()

// 4.	Supondo que a população de um país A seja da ordem de 80000 habitantes
// com uma taxa anual de crescimento de 3% e que
// a população de B seja 200000 habitantes com uma taxa de crescimento de 1.5%.
// Faça um programa que calcule e escreva o número de anos necessários
// para que a população do país A ultrapasse ou iguale a população do país B,
// mantidas as taxas de crescimento.

let paisA1 = 80000
let paisB1 = 200000
let ano1 = 0

while (paisA <= paisB) {
    paisA += paisA * 0.03
    paisB += paisB * 0.015
    ano++
}
console.log(`O país A ultrapassa ou iguala a país B em ${ano} anos`)

