const req = require(`prompt-sync`)
const prompt = req()

// criar um sistema que verifique a votação de um candidato
// escrever  por extenso 

let votoCandidatoA = 200
let votoCandidatoB = 100

if (votoCandidatoA > votoCandidatoB) {
    console.log('Candidato A vencedor!')
} else if (votoCandidatoB > votoCandidatoA) {
    console.log('Candidato A vencedor!')
} else {
    console.log('A votação terminou em Empate.')
}
