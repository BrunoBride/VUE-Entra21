const req = require('prompt-sync')
const prompt = req()

//peça 2 numeros e verifique o maior

let n1 = Number(prompt('Digite o primeiro número: '))
let n2 = Number(prompt('Digite o segundo número: '))

if (n1 > n2) {
    console.log('O Primeiro número é o marior \n')
} else {
    console.log('O Segundo número é o marior \n')
}

