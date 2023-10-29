const r = require('prompt-sync')
const prompt = r()

// Decida se um aluno foi aprovado (nota maior ou igual a 60) ou reprovado

let nota = Number(prompt('Digite a nota do aluno na prova (0-100): '))
if(nota >= 0 && nota <= 100){
    if(nota >= 60){
        console.log(`A nota do aluno (${nota}) faz com que o aluno seja APROVADO!`)
    }else{
        console.log(`A nota do aluno (${nota}) faz com que o aluno seja REPROVADO!`)
    }
}else{
    console.log('O valor digitado é inválido!')
}
    