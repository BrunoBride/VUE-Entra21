// função de prompt
const call = require('prompt-sync')
const prompt = call()


//verificar se dois numeros sao iguais

let altura = Number(prompt('Digite a sua altura'))


if (altura >3) {
    console.log('Você é GIGANTE')
} else {
    console.log('Você é não é GIGANTE')
}
