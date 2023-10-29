const r = require('prompt-sync')
const prompt = r()

// Decida qual é o maior dentre três números

let num1 = Number(prompt('Digite um número: '))
let num2 = Number(prompt('Digite outro número: '))
let num3 = Number(prompt('E agora o último número: '))

if(num1 >= num2 && num1 >= num3){
    console.log(`O maior número dentre os três digitados é o ${num1}`)
}else if(num2 >= num1 && num2 >= num3){
    console.log(`O maior número dentre os três digitado é o ${num2}`)
}else{
    console.log(`O maior número dentre os três digitado é o ${num3}`)
}