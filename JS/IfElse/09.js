const req = require('prompt-sync')
const prompt = req()

// 9.	Faça um Programa que leia três números e mostre-os em ordem decrescente.


let n1 = Number(prompt("Digite o primeiro número: "))
let n2 = Number(prompt("Digite o segundo número: "))
let n3 = Number(prompt("Digite o terceiro número: "))


if (n1 > n2 && n2 > n3) {
    console.log(`A ordem decrescente é: ${n1}, ${n2}, ${n3}`)
    
} else if (n1 > n2 && n2 < n3 && n1 > n3) {
    console.log(`A ordem decrescente é: ${n1}, ${n3}, ${n2}`)

} else if (n1 > n2 && n2 < n3 && n1 < n3) {
    console.log(`A ordem decrescente é: ${n3}, ${n1}, ${n2}`)

}else if (n1 < n2 && n2 > n3 && n1 > n3) {
    console.log(`A ordem decrescente é: ${n2}, ${n1}, ${n3}`)

}else if (n1 < n2 && n2 > n3 && n1 < n3) {
    console.log(`A ordem decrescente é: ${n2}, ${n3}, ${n1}`)
} else{
    console.log(`A ordem decrescente é: ${n3}, ${n2}, ${n1}`)
}
