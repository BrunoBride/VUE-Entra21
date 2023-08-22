// função de prompt
const call = require('prompt-sync')
const prompt = call()


//verificar os dia da semana pelo numeroi informado

let num = Number(prompt('Digite um número de 1 a 7'))


if (num == 1) {
    console.log('Domingo')
} else if (num == 2) {
    console.log('Segunda')
} else if (num == 3) {
    console.log('Terça')
} else if (num == 4 ) {
    console.log('Quarta')
} else if (num == 5 ) {
    console.log('Quinta')
} else if (num == 6 ) {
    console.log('Sextou')
} else if (num == 7 ) {
    console.log('Sábado')
} else{
    console.log('Entrada Inválida')
}
