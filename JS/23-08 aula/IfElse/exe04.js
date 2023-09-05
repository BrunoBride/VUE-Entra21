const req = require(`prompt-sync`)
const prompt = req()

// digite um numero de 1 a 5
// escrever  por extenso 


let num = Number(prompt(`Digite um número de 1 a 5: `))

// if (nun == 1) {
//     console.log(`Um`)
// } else if (nun == 2) {
//     console.log(`Dois`)
// } else if(nun == 3){
//     console.log(`Três`)
// } else if(nun == 4){
//     console.log(`Quatro`)
// } else if(nun == 5){
//     console.log(`Cinco`)
// }else{
//     console.log(`Entrada Inválida`)
// }

//overkill de processo utilizando a entrada acima
//o ideal é utilizar o swetcase

switch (num) {
    case 1:
        console.log(`Um`)
        break;
    case 2:
        console.log(`Dois`)
        break;
    case 3:
        console.log(`Três`)
        break;
    case 4:
        console.log(`Quatro`)
        break;
    case 5:
        console.log(`Cinco`)
        break;
    default:
        console.log(`Entrada Inválida`)
        break;
}
