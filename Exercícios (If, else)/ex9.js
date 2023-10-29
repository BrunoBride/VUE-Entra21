const r = require('prompt-sync')
const prompt = r()

// Faça um programa que leia três números 
// e mostre-os em ordem crescente

let n1 = Number(prompt('Digite um número: '))
let n2 = Number(prompt('Digite outro número: '))
let n3 = Number(prompt('Agora digite o último número: '))

if(n1 > n2 && n1 > n2){
    if(n2 > n3){
        console.log(`A ordem crescente dos números digitado é: \n ${n3} \n ${n2} \n ${n3}.`)
    }else{
        console.log(`A ordem crescente dos números digitado é: \n ${n2} \n ${n3} \n ${n1}`)
    }
}else if(n2 > n1 && n2 > n3){
    if(n1 > n3){
        console.log(`A ordem crescente dos números digitado é: \n ${n3} \n ${n1} \n ${n2}`)
    }else{
        console.log(`A ordem crescente dos números digitado é: \n ${n1} \n ${n3} \n ${n2}`)
    }
}else{
    if(n1 > n2){
        console.log(`A ordem crescente dos números digitado é: \n ${n2} \n ${n1} \n ${n3}`)
    }else{
        console.log(`A ordem crescente dos números digitado é: \n ${n1} \n ${n2} \n ${n3}`)
    }
}