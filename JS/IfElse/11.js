const req = require('prompt-sync')
const prompt = req()

// Faça um programa que recebe o salário de um colaborador e o reajuste segundo 
// o seguinte critério, baseado no salário atual:
// salários até R$ 280,00 (incluindo) : aumento de 20%
// salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
// salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
// salários de R$ 1500,00 em diante : aumento de 5% Após o aumento ser realizado, informe na tela:
// o salário antes do reajuste;
// o percentual de aumento aplicado;
// o valor do aumento;
// o novo salário, após o aumento.0

let salario = Number(prompt('Informe o seu salário: '))
let aumentoSalarial, novoSalario, porcentual


if (salario <= 280){
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
