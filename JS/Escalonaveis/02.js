const req = require('prompt-sync')
const prompt = req()

// 2.	Determine se um número é par ou ímpar.

let num = Number(prompt("Digite um número:" )) 

if(num %2 == 0){
    console.log("O número é PAR")
}else {
    console.log("O número é ÍMPAR")
}