const req = (`prompt-sync`)
const prompt = req()

//validação de senha e usuario


// let usuarioLocal = "admin"
// let senhaLocal = "1234"

// //validação individual
// let usuario = (`Usuário: `)

// if (usuario != usuarioLocal) {
//     console.log(`Usuário não cadastrado`)
// }


// let senha = prompt(`Senha: `)

// if (senha != senhaLocal) {
//     console.log(`Senha Incorreta`)
// }



let usuarioLocal = "admin"
let senhaLocal = "1234"

let usuario = (`Usuário: `)
let senha = prompt(`Senha: `)

if (usuario != usuarioLocal && senha != senhaLocal) {
    console.log(`Login efetuado com sucesso!`)
} else {
    console.log(`Informações incorretas`)
}