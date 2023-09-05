// Faça um programa para cadastrar 10 nomes. 
// Permita o usuário pesquisar um nome através do índice. 
// Ex: O Usuário digita o número 2, e programa mostra o nome 
// cadastrado no índice 2 do vetor.
const prompt = require('prompt-sync')()

let nomes = []

for(let i =0;i<10;i++){
    nomes[i] = prompt('Digite um nome: ')
}

let indice = Number(prompt('Você quer ver o qual indice do vetor: '))
console.log(nomes[indice])