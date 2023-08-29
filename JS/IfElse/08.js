const req = require('prompt-sync')
const prompt = req()

// 8.	Faça um programa que pergunte o preço de três produtos e 
// informe qual produto você deve comprar, sabendo que a decisão é sempre pelo mais barato.


let p1 = Number(prompt("Digite o preço do primeiro produto: "))
let p2 = Number(prompt("Digite o preço do segundo produto: "))
let p3 = Number(prompt("Digite o preço do terceiro produto: "))


if (p1 < p3 && p1 < n3) {
    console.log(`O ${p1} é o produto mais barato`)
} else if (p2 < p3) {
    console.log(`O ${p2} é o produto mais barato`)
} else {
    console.log(`O ${p3} é o produto mais barato`)
}
