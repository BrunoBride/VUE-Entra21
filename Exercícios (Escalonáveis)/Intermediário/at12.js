const r = require('prompt-sync')
const prompt = r()

// Calcule a média de três notas e classifique o aluno como 
// "A", "B", "C" e "D" com base na média

let n1 = Number(prompt('Digite a primeira nota do aluno: '))
let n2 = Number(prompt('Digite a segunda nota do aluno: '))
let n3 = Number(prompt('Digite a última nota do aluno: '))
let media = (n1+n2+n3)/3

if(media <= 2.5){
    let classific = ('D')
    console.log(`O aluno teve uma média de ${media}, logo sua classificação foi: ${classific}`)
}else if(media > 2.5 && media <= 5){
    let classific = 'C'
    console.log(`O aluno teve uma média de ${media}, logo sua classificação foi: ${classific}`)
}else if(media > 5 && media <= 7.5){
    let classific = 'B'
    console.log(`O aluno teve uma média de ${media}, logo sua classificação foi: ${classific}`)
}else if(media > 7.5 && media <= 10){
    let classific = 'A'
    console.log(`O aluno teve uma média de ${media}, logo sua classificação foi: ${classific}`)
}