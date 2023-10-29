const r = require('prompt-sync')
const prompt = r()

// Faça um programa que pergunte em que turno você estuda. 
// Peça para digitar M-matutino ou V-vespertino ou N-noturno. 
// Imprima a mensagem "Bom dia!", "Boa tarde!" ou "Boa noite!"

let turno = String(prompt('Digite em qual turno você estuda: ').toLowerCase())

if(turno == 'm' || turno == 'matutino'){
    console.log(`Bom dia!`)
}else if(turno == 'v' || turno == "vespertino"){
    console.log(`Boa tarde!`)
}else if(turno == 'n' || turno == 'noturno'){
    console.log(`Boa noite!`)
}else{
    console.log(`Texto digitado inválido!`)
}