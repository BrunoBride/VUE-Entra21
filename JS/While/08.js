const req = require('prompt-sync')
const prompt = req()

// 8.	Faça um programa que peça ao usuário para digitar um número e 
// calcule o fatorial desse número usando um loop while.


let menu = '1'

while (menu != '0') {
    menu = prompt('1-Executar 0-Sair ')
    if (menu == 1) {
        let n1 = Number(prompt('Digite um número: '))
        if (isNaN(n1)) {
            console.log('Não é um número')
        } else {
            let contador = 1
            let fatorial = 1
            while (contador <= n1) {
                fatorial *= contador
                contador++
                console.log(fatorial)
            }
            console.log(`\nO resultado de ${n1}! é: ${fatorial}`)
        }
    } else if (menu == 0) {
        console.log('Encerrando sistema...')
    }
}