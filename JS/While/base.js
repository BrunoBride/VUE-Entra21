const req = require('prompt-sync')
const prompt =  req()

// 


let menu = '1'

while(menu != '0'){
    menu = prompt('1-Executar 0-Sair ')
    if(menu == 1){
        let n1= Number(prompt('Digite : '))
        console.log(condi ? true : false)       
    }else if(menu == 0){
        console.log('Encerrando sistema...')
    }
}