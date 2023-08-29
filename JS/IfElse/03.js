const req = require('prompt-sync')
const prompt = req()

// 3.	Faça um Programa que verifique se uma letra digitada é "F" ou "M" ou “O”. 
// Conforme a letra escrever: F - Feminino, M - Masculino, O - Outro.

let letra = prompt("Digite uma letra:")

if (letra == 'F' || letra == 'f') {
    console.log("Feminino")
} else if (letra == 'M' || letra == 'm') {
    console.log("Masculino")
} else if (letra == 'O' || letra == 'o') {
    console.log('Outro')
} else {
    console.log('Não foi a letra sorteada')

}