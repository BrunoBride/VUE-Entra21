const r = require('prompt-sync')
const prompt = r()

// Verifique se um número é positivo, negativo ou zero

let num = Number(prompt('Digite um número: '))

if(num != 0){
    if(num > 0){
        console.log(`O ${num} é um número positivo!`)
    }else{
        console.log(`O ${num} é um número negativo!`)
    }
}else{
    console.log(`O ${num} é igual a zero!`)
}