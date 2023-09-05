const prompt = require('prompt-sync')()

// Ler um vetor de 10 elementos inteiros e positivos. 
// Criar um segundo vetor da seguinte forma: 
// os elementos de índice par receberão os respectivos elementos divididos por 2; 
// os elementos de índice ímpar receberão os respectivos elementos multiplicados por 3. 
// Imprima os dois vetores. 

let lista_1 = []
let lista_2 = []

for (let i = 0; i < 3; i++) {
    lista_1[i] = Number(prompt('Digite 10 números: '))
}

console.log(lista_1)


validar par e impar no Indice 

