const promptCall = require('prompt-sync')
const prompt = promptCall()

let base = prompt('Digite o tamanho da base:')
let altura = prompt('Digite o tamanho da altura:')
 

let volume = ((Math.pow(base,2)) * altura) /3

console.log(`O volume da piramide é: ${volume} m³`)