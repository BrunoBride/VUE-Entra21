const req = require('prompt-sync')
const prompt = req()

// 12.	Faça um programa para o cálculo de uma folha de pagamento, sabendo que os descontos são 
// do Imposto de Renda, que depende do salário bruto - 3% para o Sindicato - o FGTS a 11% do Salário Bruto, 
// mas não é descontado. O Salário Líquido corresponde ao Salário Bruto menos os descontos. 
//O programa deverá pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês.
// 	Desconto do IR:
// 	Salário Bruto até 900 (inclusive) - isento
// 	Salário Bruto até 1500 (inclusive) - desconto de 5%
// 	Salário Bruto até 2500 (inclusive) - desconto de 10%
//   Salário Bruto acima de 2500 - desconto de 20% 
// Imprima na tela as informações, dispostas conforme o exemplo abaixo. No exemplo o valor da hora é 5 e a quantidade de hora é 220.
//         Salário Bruto: (5 * 220)        : R$ 1100,00
//         (-) IR (5%)                     : R$   55,00  
//         (-) INSS ( 10%)                 : R$  110,00
//         FGTS (11%)                      : R$  121,00
//         Total de descontos              : R$  165,00
//         Salário Liquido                 : R$  935,00


let hrTrabalhada = Number(prompt('Informe a quantidade de horas trabalhadas: '))
let valorHora = Number(prompt('Informe o valor da hora de trabalho: '))
let salBruto = hrTrabalhada * valorHora
let salLiquido, impRenda, inss, fgts 

if (salBruto <= 900){
     aumentoSalarial = ((salario * 20)/100)
     porcentual = "20%"
}else if(salario > 280 && salario <=700) {
     aumentoSalarial = ((salario * 15)/100)
     porcentual = "15%"
}else if(salario > 700 && salario <=1500) {
     aumentoSalarial = ((salario * 10)/100)
     porcentual = "10%"
}else {
     aumentoSalarial = ((salario * 5)/100)
     porcentual = "5%"
}
novoSalario = salario + aumentoSalarial

console.log(`O seu salário era de: R$ ${salario}; \nO bonus é de: R$ ${aumentoSalarial}\nCorresponde um aumento de ${porcentual}\nO novo salário será de R$ ${novoSalario}`)