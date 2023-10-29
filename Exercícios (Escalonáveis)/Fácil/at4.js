const r = require('prompt-sync')
const prompt = r()

//Verifique se um número é divisível por 3 e 5

let num = Number(prompt('Digite um número: '))

if(num % 3 == 0 && num % 5 == 0){
    console.log(`O número digitado (${num}) é um número divisível por 3 e 5!`)
}else if(num % 3 == 0){
    console.log(`O número digitado (${num}) é um número divisível por 3!`)
}else if(num % 5 == 0){
    console.log(`O número digitado (${num}) é um número divisível por 5`)
}else{
    console.log(`O número digitado (${num}) não é divisível com 3 e 5`)
}