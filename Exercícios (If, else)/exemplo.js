let r = require('prompt-sync')
let prompt = r()

// Verificar se um número é par ou ímpar 

// if(Number(prompt('Digite um número')%2 == 0)){
//     console.log('Par')
// }else{
//     console.log('Ímpar')
// }

// // Verifique se o nome de alguém é Brasil

// if(prompt('Digite seu nome: ') == 'Brasil'){
//     console.log('Olá Brasil')
// }else{
//     console.log('Quem é você? ')
// }
// console.log(Number(prompt('Digite um número: ')) % 2 == 0 ? 'par' : 'ímpar')

// let hora = 10
// let dia = hora < 12 ? 'am' : hora < 18 ? 'tarde' : 'noite'
// let dia = hora < 12 ? 'am' : 'pm'
// depende unicamente para retornar com a operação condicional em uma variável alguma coisa

//VOGAL ou Consoante
// Mas para o prompt a varíavel tem que ser fora 
// let letra = prompt('Letra: ').toLowerCase()

// let resultado = letra == 'a' || letra == 'e' || letra == 'i' || letra == '0' || letra == 'u' ? 'vogal' : 'consoante'
// console.log(resultado)
// console.log(letra == 'a' || letra == 'e' || letra == 'i' || letra == '0' || letra == 'u' ? 'vogal' : 'consoante')

//Pesquisar no Google
//javascript /a-u/
//javascript /a-z/
///0-9/
//regex  do JavaScript
//\n pode ser utilizado em console.log

// let letra - prompt('Letra: ').toUpperCase()
// let regex = /a-z/
// console.log(/A-U/.test(prompt('Letra: ').toUpperCase())? 'vogal' : 'consoante')
// //.test serve para testar a validação do rejects
// if(/0-9/.test(9)){
// }

let nome = 'Maria'
console.log(nome.length)

