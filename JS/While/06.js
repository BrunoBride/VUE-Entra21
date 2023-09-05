const req = require('prompt-sync')
const prompt =  req()


// 6.	Faça um programa que peça ao usuário para digitar uma palavra e 
// imprima cada letra da palavra em uma linha separada usando um loop while


let menu = '1'

while(menu != '0'){
    menu = prompt('1-Executar 0-Sair ')
    if(menu == 1){
        let meuTxt= (prompt('Digite uma palavra: '))
        let i = 0
        while (i < meuTxt.length) {
            console.log(`\n${meuTxt[i]}`)
            i++ 
        }       
    }else if(menu == 0){
        console.log('Encerrando sistema...')
    }
}