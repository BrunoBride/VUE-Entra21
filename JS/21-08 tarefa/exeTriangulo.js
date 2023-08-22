const promptCall = require('prompt-sync')
const prompt = promptCall()

let base = prompt('Digite o valor da base do triangulo:')
let altura = prompt('Digite o valor da altura do triangulo:')


let area = ((base * altura)/2)

console.log("A área do triangulo é: " + area)

 