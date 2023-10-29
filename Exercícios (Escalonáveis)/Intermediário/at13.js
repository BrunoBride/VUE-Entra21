const r = require('prompt-sync')
const prompt = r()

// Determine se um número é primo ou não

let num = Number(prompt('Digite um número: '))

if(num % 2 != 0 && num % 3 != 0 && num % 5 != 0 && num % 7 != 0){
    console.log(`O número digitado ${num} é um número primo!`)
}else{
    console.log(`O número digitado ${num} é um número composto!`)
}