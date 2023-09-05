const req = require('prompt-sync')
const prompt =  req()


let quantidadeBolachaNoPacote = 10
while(quantidadeBolacha > 0){

    quantidadeBolachaNoPacote--
    console.log("Comi uma bolacha")
    console.log('Ainda tem no pacote: '+quantidadeBolachaNoPacote)
    console.log()

}


