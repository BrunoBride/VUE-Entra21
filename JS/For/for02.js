const prompt = require('prompt-sync')()

// Ler um vetor de 10 elementos. 
// Crie um segundo vetor, com todos os elementos na ordem inversa, ou seja, 
// o último elemento passará a ser o primeiro, o penúltimo será o segundo e assim por diante. 
// Imprima os dois vetores

let vetorInicial = []
let vetorInverso = []
let k = 0

for (let i = 0; i < 3; i++) {
    vetorInicial[i] = prompt('Digite 10 elementos: ')
}

for( let i = vetorInicial.length; i>0; i--){
   vetorInverso[k] = vetorInicial[i] 
   k++
   console.log(vetorInverso[k])
}