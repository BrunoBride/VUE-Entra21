const req = require('prompt-sync')
const prompt = req()

// 9.	Faça um programa que peça ao usuário para digitar dois números e 
// imprima todos os números entre eles usando um loop while.

let menu = '1'
while (menu != '0') {
    menu = prompt('1-Executar 0-Sair ')
    if (menu == 1) {

        let n1 = Number(prompt('Digite um número: '))
        let n2 = Number(prompt('Digite outro número: '))
        let nStart, nEnd
        if (n1 > n2) {
            console.log('a')
            nStart = n2
            nEnd = n1
            console.log(nStart,nEnd)
        } else if (n1 < n2) {
            console.log('b')
            nStart = n1
            nEnd = n2
            console.log(nStart,nEnd)
        } else {
            console.log('Os números são iguais')
        }

        nStart++
        while (nStart < nEnd) {
            console.log(`\n${nStart}`)
            nStart++
        }
        console.log('\nFim da Exibição dos números')
    } else if (menu == 0) {
        console.log('Encerrando sistema...')
    }
}