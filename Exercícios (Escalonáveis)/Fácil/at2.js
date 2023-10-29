const r = require('prompt-sync')
const prompt = r()

// Determine se um número é par ou impar

let num = Number(prompt('Digite um número: '))

if(num%2 == 0){
    console.log(`${num} é um número par!`)
}else{
    console.log(`${num} é um número impar!`)
}