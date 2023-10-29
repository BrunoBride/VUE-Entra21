let r = require('prompt-sync')
let prompt = r()

let n1 =Number(prompt('Digite o 1° número: ')) 
let n2 =Number(prompt('Digite o 2° número: ')) 
let flag = true
let menu = prompt('1-Soma 2- Subtração 3- Multiplicação 4- Divisão\n')
//\n é para quebrar linha no console
let = resultado = 0
switch(menu){
    case '1': 
        // if(n1 % 2 == 0){
        //     console.log(`${n1} é par`)
        // }else{
        //     console.log(`${n1} é ímpar`)
        // }
        // if(n2 % 2 == 0 ){
        //     console.log(`${n2} é par`)
        // }else{
        //     console.log(`${n2} é ímpar`)
        // }
        
        // Operador ternário
        // let resultado = n1+n2
        // console.log(`${n1} + ${n2} = ${resultado}`)
        // console.log(resultado % 2 == 0 ? 'par' : 'ímpar')
        // console.log(resultado < 0 ? 'negativo' : 'positivo')

            resultado = n1 + n2
            break;
        case '2': 
            restultado = n1 - n2
            break;
        case '3':
            resultado = n1 * n2
            break;
        case '4': 
            resultado = n1 / n2
            break;
        default: 
            console.log('Operador Inválido')
            flag = false
}

console.log(`${n1} + ${n2} = ${resultado}`)
console.log(resultado % 2 == 0 ? 'par' : 'ímpar')
console.log(resultado < 0 ? 'negativo' : 'positivo')