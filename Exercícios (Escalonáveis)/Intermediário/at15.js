const r = require('prompt-sync')
const prompt = r()

// Verifique se uma palavra é um palíndromo

let palavra = String(prompt('Digite uma palavra: '))
let tamanho = palavra.split("")
let reverse = tamanho.reverse()
let novaPalavra = reverse.join("")

console.log(novaPalavra)

if(palavra == novaPalavra){
    console.log(`A ${palavra} é um palíndromo! Já que ${palavra} ao contrário é ${novaPalavra}!`)
}else{
    console.log(`A ${palavra} não é um palíndromo! Já que ao contrário ela se transforma em ${novaPalavra}!`)
}