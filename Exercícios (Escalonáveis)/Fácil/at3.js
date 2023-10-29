const r = require('prompt-sync')
const prompt = r()

// Classifique duas idades como "jovem" (menos de 30 anos) ou "não jovem" (65 anos ou mais)

let idade = Number(prompt('Digite uma idade: '))

if(idade < 30){
    console.log(`Com uma idade de ${idade} anos, você é um JOVEM!`)
}else{
    console.log(`Com uma idade de ${idade}, você não é mais jovem.`)
}