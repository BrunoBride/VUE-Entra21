const req = require('prompt-sync')
const prompt = req()

// 10.	Faça um programa que peça ao usuário para digitar um número e 
// verifique se ele é primo ou não usando um loop while.

let menu = '1'

while (menu != '0') {
    menu = prompt('1-Executar 0-Sair ')
    if (menu == 1) {
        let num = Number(prompt('Digite um número: '))
        let divisor = 2
        if ((Math.sqrt(num)) % divisor != 0) {
            console.log('O número informado é PRIMO')

        } else {
            console.log('O número informado não é PRIMO')
        }

    } else if (menu == 0) {
        console.log('Encerrando sistema...')
    }
}