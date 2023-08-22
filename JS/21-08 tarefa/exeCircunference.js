const promptCall = require('prompt-sync')
const prompt = promptCall()

let raio = prompt('Digite o valor do raio:')


let circulo = 2 * Math.PI * raio


console.log("A área do círculo é: " + circulo)

 