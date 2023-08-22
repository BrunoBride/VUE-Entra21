const req = require('prompt-sync')
const prompt = req()

// Desafio: Criar um programa que permita o usuario
// entrar com os valores a,b,c de uma equação do segundo
// grau e:
// 	a)Calcule o delta (delta = (b²) - 4 *a*c)
// 	c)Calcular o valor de x'

let a = Number(prompt('Digite o valor de a: '))
let b = Number(prompt('Digite o valor de b: '))
let c = Number(prompt('Digite o valor de c: '))

let delta = Math.pow(b,2) - 4 * a * c 

let x1 = (-b + Math.sqrt(delta)) / ( 2 * a )
let x2 = (-b - Math.sqrt(delta)) / ( 2 * a )

console.log(`x1 = ${x1}`)
console.log(`x2 = ${x2}`)
