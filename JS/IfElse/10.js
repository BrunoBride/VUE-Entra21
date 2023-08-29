const req = require('prompt-sync')
const prompt = req()

// 10.	Faça um Programa que pergunte em que turno você estuda. 
// Peça para digitar M-matutino ou V-Vespertino ou N- Noturno. 
// Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" 
// ou "Valor Inválido!", conforme o caso.

let periodo = prompt('Informe o período que você estuda. \n Digite a inicial do turno:\n M-matutino ou V-Vespertino ou N- Noturno: ').toLowerCase

switch (periodo){
    case 'm':
        console.log("bom dia")
        break;
    case 'v':
            console.log('boa tarde')
        break;
    case 'n':
        console.log('boa noite')
        break;
    default:
        console.log('valor invalido')
        break;

}
