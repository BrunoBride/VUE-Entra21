const prompt = require(`prompt-sync`)()

// crie um sistema para o usuário salvar 06 notas em um vetor

let notas = []

for(let i = 0; i<6; i++){
notas[i] = Number(prompt('Digite a nota: '))
}