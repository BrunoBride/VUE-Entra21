const prompt = require('prompt-sync')()

// 1.5 Faça um programa para cadastrar 10 nomes.
// Permita o usuário pesquisar um nome através do índice. 
// Ex: O Usuário digita o número 2, e programa mostra o nome cadastrado no índice 2 do vetor.

let nomes = []

for (let i = 0; i < 10; i++) {
    nomes[i] = prompt('Digite 10 nomes: ')
}

let index = Number(prompt("digite a posição do nome para pesquisar: "))
console.log(nomes[index])

//ok
