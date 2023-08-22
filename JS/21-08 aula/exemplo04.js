
const promptCall = require('prompt-sync')
const prompt = promptCall()

let numero1 = Number(prompt('Digite o primeiro número: '))
let numero2 = Number(prompt('Digite o segundo número: '))

let sub = numero1 - numero2

console.log('A soma dos números é: '+ (numero1 + numero2))
console.log('A subtração dos números é: '+sub)



