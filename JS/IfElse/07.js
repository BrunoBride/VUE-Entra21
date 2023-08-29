const req = require('prompt-sync')
const prompt = req()

// 7.	Faça um Programa que leia três números e mostre o maior e o menor deles.


let n1 = Number(prompt("Digite o primeiro número: "))
let n2 = Number(prompt("Digite o segundo número: "))
let n3 = Number(prompt("Digite o terceiro número: "))
let maior
let menor

if (n1 > n3 && n1 > n3) {
    maior = n1
} else if (n2 > n3) {
    maior = n2
} else {
    maior = n3
}

if (n1 < n3 && n1 < n3) {
    menor = n1
} else if (n2 < n3) {
    menor = n2
} else {
    menor = n3
}
console.log(`O ${maior} é o maior número informado e o ${menor} é o menor número`)