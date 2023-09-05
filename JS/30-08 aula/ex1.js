const prompt = require('prompt-sync')()

//	Faça um programa que peça uma nota, entre zero e dez. 
//Mostre uma mensagem caso o valor seja inválido 
//e continue pedindo até que o usuário informe um valor válido..

let num1 = Number(prompt('Digite um número valido: '))

if(num1 < num2){
   inicial = num1
   final = num2
}else if(num2< num1){
    inicial = num2
    final = num1
}else{
    console.log('Os números são iguais')
}

inicial++
while(inicial < final)
{
    console.log(inicial)
    inicial++
}

