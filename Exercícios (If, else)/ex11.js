let r = require('prompt-sync')
let prompt = r()

let salario, porcentagem

salario = Number(prompt("Digite o salário do funcionário: R$"))

// if(salario <= 280){
//     porcentagem = 20
//     aumento = salario * (porcentagem/100)
//     salario += aumento
//     console.log('Salário antigo: ')
// }

if(salario <= 280){
    porcentagem = 20
}else if(salario <= 700){
    porcentagem = 15
}else if(salario <= 1500){
    porcentagem = 10
}else{
    porcentagem = 5
}

console.log(`O salário antes do reajuste: R$${salario}`)
console.log(`O percentual de aumento aplicado: R$${porcentagem}`)
console.log(`Valor do aumento: R$${salario*(porcentagem/100)}`)
console.log(`Novo salário: R$${salario+(salario*(porcentagem/100))}`)