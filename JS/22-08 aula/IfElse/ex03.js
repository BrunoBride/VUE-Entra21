// função de prompt
const call = require('prompt-sync')
const prompt = call()


//verificar se dois numeros sao iguais

let num1 = Number(prompt('Digite o primeiro número'))
let num2 = Number(prompt('Digite o segundo número'))

if (num1 == num2) {
    console.log('Os numeros são iguais')
} else {
    console.log('Os numeros são diferentes')
}

//para verificar se é diferente
if (num1 != num2) {
    console.log('Os numeros são diferentes')
} else {
    console.log('Os numeros são iguais')
}