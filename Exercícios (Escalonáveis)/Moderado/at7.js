const r = require('prompt-sync')
const prompt = r()

// Determine se um ano é bissexto ou não 

let ano = Number(prompt('Digite o ano em que estamos: '))

if(ano % 4 == 0){
    console.log (`O ano em que estamos (${ano}) é um ano bissexto!`)
}else{
    console.log(`O ano em que estamos (${ano}) não é um ano bissexto.`)
}