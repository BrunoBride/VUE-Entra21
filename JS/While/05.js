const req = require("prompt-sync");
const prompt = req();

// 5.	Faça um programa que peça ao usuário para digitar uma senha e
// continue pedindo a senha até que ela seja "1234".

let senha = prompt("Digite a senha: ");

while (senha != "1234") {
  console.log("Senha incorreta!");
}
console.log("bem vindo ao sistema");
