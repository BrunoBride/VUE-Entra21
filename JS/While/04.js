const req = require('prompt-sync')
const prompt =  req()

// 4.	Faça um programa que peça ao usuário para digitar um número e 
// imprima a tabuada desse número usando um loop while


let menu = '1'

while(menu != '0'){
    menu = prompt('1-Executar 0-Sair ')
    if(menu == 1){
        let n1 = Number(prompt('Digite um número: '))
        let i = 0
        while (i <= n1) {
            console.log(`\n${n1} * ${i} = ${i*n1}`)
            i++ 
        }
    }else if(menu == 0){
        console.log('Encerrando sistema...')
    }
}