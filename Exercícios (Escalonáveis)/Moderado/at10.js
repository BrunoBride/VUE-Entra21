const r = require('prompt-sync')
const prompt = r()

//Determine se um triângulo é equilátero, isósceles ou escaleno

let l1 = Number(prompt('Digite a medida de um dos lados do triângulo: '))
let l2 = Number(prompt('Agora a medida do outro lado: '))
let l3 = Number(prompt('E agora a medida do último lado: '))

if(l1 < (l2+l3) && l2 < (l1+l3) && l3 < (l1+l2)){
    console.log ('As medidas informadas formam um triângulo!')
    if(l1 == l2 && l2 == l3 && l3 == l1){
        console.log('Sendo este um Triângulo Equilátero!')
    }else if(l1 == l2 || l2 == l3 || l3 == l1){
        console.log('Sendo este um Triângulo Isósceles!')
    }else{
        console.log('Sendo este um Triângulo Escaleno!')
    }
}else{
    console.log('As medidas informadas não formam um triângulo!')
}