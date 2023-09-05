const prompt = require("prompt-sync")();

// 2.	Faça um programa que leia um nome de usuário e a sua senha e
// não aceite a senha igual ao nome do usuário,
// mostrando uma mensagem de erro e voltando a pedir as informações.

let user = prompt("Cadastre seu nome de usuário: ");
let senha = prompt("Cadastre sua senha: ");

while (senha == user) {
  console.log("Usuario e senha não podem ser iguais!");
  user = prompt("Cadastre seu nome de usuário: ");
  senha = prompt("Cadastre sua senha DIFERENTE do login: ");
}
console.log('Cadastro realizado!')
