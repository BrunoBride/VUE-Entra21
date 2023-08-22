const promptCall = require('prompt-sync')
const prompt = promptCall()

let numA = prompt('Digite o valor de A:')
let numB = prompt('Digite o valor de B:')
let numC = prompt('Digite o valor de C:')

let delta = Math.pow(numB,2) - (4 * numA * numC)

console.log("Delta é: " + delta)

if (delta < 0){
    console.log("raízes são imaginárias e distintas")
} 
else if(delta === 0) {
    console.log("raízes são reais e iguais")
    let x1 = (-numB + Math.sqrt(delta)) / (2 * numA);
    let x2 = (-numB - Math.sqrt(delta)) / (2 * numA);
    console.log('x1 = '+x1)
    console.log('x2 = '+x2)
   
} 