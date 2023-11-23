"use strict";
// let idade: number = 10
// let nome: string = 'ana'
// let nome2: string = 'ana2'
const filme1 = {
    titulo: 'Senhor dos Aneis',
    duracao: 120,
    genero: 'fantasia',
    classificacao: 12,
    diretor: 'Aquele moço'
};
// console.log(filme1.diretor)
const filmes = [
    filme1,
    {
        titulo: 'Falcao Negro',
        duracao: 120,
        genero: 'Ação',
        classificacao: 16,
        diretor: 'Ridley Scott'
    },
    {
        titulo: 'Como treinar o doguino',
        duracao: 90,
        genero: 'fantasia',
        classificacao: 10,
        diretor: 'outro moço'
    }
];
// console.log(filmes)
filmes.forEach(filme => console.log(filme.titulo));
const animais = [
    {
        especie: 'papagaio',
        categoria: 'ave',
        peso: 0.300
    },
    {
        especie: 'lobo',
        categoria: 'canino',
        peso: 20.000
    }, {
        especie: 'camaleao',
        categoria: 'reptil',
        peso: 0.800
    }
];
animais.forEach(animal => console.log(animal.especie));
