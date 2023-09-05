const prompt = require("prompt-sync")();

// 3.	Faça um programa que leia e valide as seguintes informações:
// 	Nome: maior que 3 caracteres;
// 	Idade: entre 0 e 150;
// 	Salário: maior que zero;
// 	Sexo: 'f' ou 'm';
// 	Estado Civil: 's', 'c', 'v', 'd';


let nome = prompt("Digite seu nome: ");
while (nome.length <= 3) {
  console.log("O Nome precisa ter mais de três carateres");
  nome = prompt("Digite seu nome");
}

let idade = prompt("Digite sua idade: ");
while (idade > 150) {
  console.log("Idade acima do permitido");
  idade = prompt("Digite uma idade menor: ");
}

let salario = Number(prompt("Digite o valor do salário: "))
while (salario < 0) {
  console.log("Salário não pode ser menor que zero")
  salario = prompt("Digite o valor do salário: ")
}

let sexo = prompt("Digite o genero:\n f - feminino ou m - masculino ").toLowerCase()
while (sexo != 'f' && sexo != 'm') {
  sexo = prompt("Opção inválida, digite novamente:\n f - feminino ou m - masculino ").toLowerCase()
}

let estadoCivil = prompt("Digite o estado civil:\n S - Solteiro; C - Casado\n V - Viuvo; D - Divorciado ").toLowerCase()
while (estadoCivil != 's' && estadoCivil != 'c' && estadoCivil != 'v' && estadoCivil != 'd') {
  console.log("opção inválida");
  salario = prompt("Digite o genero:\n 's' Solteiro, 'c' Casado, 'v' Viúvo, 'd' Divorciado ").toLowerCase()
}


console.log(nome)
console.log(idade)
console.log(salario)
console.log(sexo)
console.log(estadoCivil)
