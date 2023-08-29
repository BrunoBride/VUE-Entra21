const req = require('prompt-sync')
const prompt = req()

// 6.	Faça um Programa que leia três números e mostre o maior deles.


let n1 = Number(prompt("Digite o primeiro número: "))
let n2 = Number(prompt("Digite o segundo número: "))
let n3 = Number(prompt("Digite o terceiro número: "))


if (n1 > n3 && n1 > n3) {
    console.log(`O ${n1} é o maior número informado`)
} else if (n2 > n3) {
    console.log(`O ${n2} é o maior número informado`)
} else {
    console.log(`O ${n3} é o maior número informado`)
}