// 2. Ler um vetor de 10 elementos. Crie um segundo vetor, 
// com todos os elementos na ordem inversa, ou seja, o último 
// elemento passará a ser o primeiro, o penúltimo será o segundo 
// e assim por diante. Imprima os dois vetores. 

const prompt = require('prompt-sync')()

let vetor1 = ['maçã','jujuba','jabuticaba','controle','revista','sergio']
let vetor2 = vetor1.slice().reverse()

for(let i = 0; i < vetor1.length;i++){
    console.log(vetor1[i])
}
console.log()
for(let i = 0; i < vetor2.length;i++){
    console.log(vetor2[i])
}




