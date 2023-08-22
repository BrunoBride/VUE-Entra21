const promptCall = require('prompt-sync')
const prompt = promptCall()

let ladoA = prompt('Digite o valor do lado de um quadrado:')


let area = (ladoA * ladoA)
let area2 = (Math.pow(ladoA,2)) //ou utilizando a função nativa

console.log("A área do quadrado é: " + area)

 