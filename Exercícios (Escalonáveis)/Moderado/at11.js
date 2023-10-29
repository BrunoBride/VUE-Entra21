const r = require('prompt-sync')
const prompt = r()

//Decida se uma pessoa pode se aposentar (idade igual ou superior a 65 anos) ou não.

let idade = Number(prompt('Gostaríamos de saber qual a sua idade? '))

if(idade >= 65){
    console.log(`Como você tem ${idade} anos, logo você tem direito a aposentadoria!`)
}else{
    console.log(`Como você tem ${idade} anos, você ainda não tem direito a aposentadoria.`)
}