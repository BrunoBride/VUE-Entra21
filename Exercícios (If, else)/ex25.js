const r = require('prompt-sync')
const prompt = r()

let contadorDeRespostas

console.log('Digite 1-SIM; 2-NÃO')
let resposta = prompt('Telefonou para a vítima? ')
if(respostas == "1"){
    contadorDeRespotas++ 
    //++ é igual a somar +1
}

resposta = prompt('Esteve no local do crime? ')
if(respostas == "1"){
    contadorDeRespotas++ 
}

resposta = prompt('Mora perto da vítima? ')
if(respostas == "1"){
    contadorDeRespotas++ 
}

resposta = prompt('Devia para a vítima? ')
if(respostas == "1"){
    contadorDeRespotas++ 
}

resposta = prompt('Já trabalhou com a vítima? ')
if(respostas == "1"){
    contadorDeRespotas++ 
}

if(contador <= 1){
    console.log('Inocente')
}else if(contador == 2){
    console.log('Suspeito')
}else if(contador < 5){
    console.log('Cúmplice')
}else{
    console.log('Inocente')
}