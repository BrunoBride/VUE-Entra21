const req = require(`prompt-sync`)
const prompt = req()

//criar um programa que o usuario informe o preço
//de um produto, se o preço for maior que 100,00
//aplicar desconto de 30%


let preco = Number(prompt(`Digite o preço do produto: R$`))

if(preco >= 100){
    let novoPreco = preco - (preco * 0,3)
    console.log(`Preço final: R$${novoPreco}`)
    console.log(`Foi aplicado: R$${preco * 0,3} de desconto`)
}else{
    console.log(`O produto não possui descontos`)
}