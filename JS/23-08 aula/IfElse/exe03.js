const req = require(`prompt-sync`)
const prompt = req()

// criar um sistema que permita que o usuario entre com a sua idade
// classificar com os seguiontes valores:
// idade ate 13 anos - crianca
// idade ate 21 anos - adolescente
// idade ate 64 anos - adulto
// idade acima de 65 - idoso


let idade = Number(prompt(`Digite a sua idade`))

if (idade <= 13) {
    console.log(`Criança`)
} else if (idade <= 21) {
    console.log(`Adolescente`)
} else if(idade <= 64){
    console.log(`Adulto`)
}else {
    console.log(`Idoso`)
}