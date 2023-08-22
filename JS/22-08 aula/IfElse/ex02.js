// função de prompt
const call = require('prompt-sync')
const prompt = call()

let num = Number(prompt('Digite um número'))

if (num >= 0) {
    console.log('Positivo')
} else {
    console.log('Negativo')
}


