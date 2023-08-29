const req = require(`prompt-sync`)
const prompt = req()

// 4.	Faça um Programa que verifique se uma letra digitada é vogal ou consoante.


let letra = prompt("Digite uma letra:")

if (letra == 'a' || letra == 'A' ||
    letra == 'e' || letra == 'E' ||
    letra == 'i' || letra == 'I' ||
    letra == 'o' || letra == 'O' ||
    letra == 'u' || letra == 'U') {
        console.log(`A letra é uma vogal`)
    }else{
        console.log(`A letra é uma consoante`)
    }

