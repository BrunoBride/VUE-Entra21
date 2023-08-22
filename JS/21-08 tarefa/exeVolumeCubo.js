const promptCall = require('prompt-sync')
const prompt = promptCall()

let face = prompt('Digite o valor do lado de um quadrado:')
let volume = (Math.pow(face,3)) 

console.log(`O volume do cubo é: ${volume} m³`)