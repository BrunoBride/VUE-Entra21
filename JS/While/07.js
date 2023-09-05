const req = require('prompt-sync')
const prompt = req()

// 7.	Faça um programa que peça ao usuário para digitar números e 
// pare quando o usuário digitar um número negativo. 
// Em seguida, imprima a soma dos números digitados.


let menu = '1'

while (menu != '0') {
    menu = prompt('1-Executar 0-Sair ')
    if (menu == 1) {
        let soma = 0
        while (true) {
            let n1 = Number(prompt('Digite um número: '))
            if (n1 >= 0) {
                soma += n1
            } else {
                break
            }
            console.log(soma)
        }
    } else if (menu == 0) {
        console.log('Encerrando sistema...')
    }
}