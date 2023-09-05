// 3. Ler um vetor de 10 elementos inteiros e positivos. 
// Criar um segundo vetor da seguinte forma: os elementos 
// de índice par receberão os respectivos elementos divididos por 2; 
// os elementos de índice ímpar receberão os respectivos elementos 
// multiplicados por 3. Imprima os dois vetores. 


const prompt = require('prompt-sync')()

let numeros = []

for(let i = 0; i<10;i++){
    numeros[i] = Number(prompt('Digite um numero: '))
}

let numeros2 = []

for(let i = 0; i<10;i++){
    if(i % 2 == 0)
        numeros2[i] = numeros[i]/2
    else
        numeros2[i] = numeros[i]*3
}

for (let i = 0; i < numeros2.length; i++) {
    const element = numeros2[i];
    console.log(element)
}