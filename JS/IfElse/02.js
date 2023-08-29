const req = require('prompt-sync')
const prompt = req()

//2.	Verifique se um número é positivo, negativo ou zero.

let num = Number(prompt("Digite um número:"))

if (num == 0) {
    console.log("O número é Zero")
} else if (num > 0) {
    console.log("O número é POSITIVO")
} else {
    console.log('O número é NEGATIVO')
}