// função de prompt
const call = require('prompt-sync')
const prompt = call()


//verificar se está em condições de se alistar ao SMV

let anoNascimento = Number(prompt('Digite o ano em que você nasceu'))
let sexo = prompt('Digite o seu sexo; digite M ou F:')

now = new Date

if ((now.getYear() - anoNascimento) >= 18 && sexo == 'M') {
    console.log('Parabéns Guerreio, O senhor está apto para cumprir como seu SMV')
} else if ((now.getYear() - anoNascimento) < 18 && sexo == 'M') {
    console.log('Calma Guerreio, sua vez vai chegar!')
} else {
    console.log('Você não possui os requisitos para se alistar')
}

