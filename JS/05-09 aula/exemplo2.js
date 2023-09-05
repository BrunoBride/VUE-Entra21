const prompt = require('prompt-sync')()

let frutas = []

for(let i = 0; i < 4;i++){
    frutas[i] = prompt('Digite o nome da fruta: ')
}

frutas.forEach(f => console.log(f))

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}
