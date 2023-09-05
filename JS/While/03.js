const req = require('prompt-sync')
const prompt = req()

// 3.	Faça um programa que peça ao usuário para digitar um número e 
// imprima todos os números de 0 até o número digitado usando um loop while.



let menu = '1'

while (menu != '0') {
    menu = prompt('1-Executar 0-Sair ')
    if (menu == 1) {
        let n1 = Number(prompt('Digite um número: '))
        let i = 0
        while (i <= n1) {
            console.log(`\n${i}`)
            i++
        }
        console.log('\nFim da Exibição dos números')
    } else if (menu == 0) {
        console.log('Encerrando sistema...')
    }
}