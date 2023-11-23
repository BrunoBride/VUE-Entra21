// let idade: number = 10
// let nome: string = 'ana'
// let nome2: string = 'ana2'

// console.log(idade)
// console.log(nome)

// let n1: number = 2
// let n2: number = 2

// let soma: number = n1 + n2;

// console.log(soma)

// function mostrarNome(nome: string) {
//     console.log(`Seu nome é ${nome}`)
// }

// mostrarNome('lilica')

// function calcAreaQuadrado(lado: number): number {
//     return lado * lado
// }

// console.log(calcAreaQuadrado(20))


// function calcCilindro(base: number, altura: number): number {
//     return Math.PI * Math.pow(base,2)*altura
// }


// console.log(calcCilindro(2,20))

// let teste : string | number | boolean;

// teste = 0
// teste = 'a'
// let isAdmin: boolean =true
// console.log(typeof isAdmin)

// let numeros: number[] = [1,2,3,4,5,6,28]
// console.log(numeros[4])


// const livro: {titulo: string; genero: string} = {
//     titulo: 'Pequeno Principe',
//     genero: 'Fantasia'
// }

// console.log(livro)

// livro.genero = 'Comedia'
// console.log(livro.genero)

type filme = {
    titulo: string;
    duracao: number;
    genero: string;
    classificacao: number;
    diretor: string
}

const filme1: filme = {
    titulo:'Senhor dos Aneis',
    duracao: 120,
    genero:'fantasia',
    classificacao: 12,
    diretor: 'Aquele moço'
}

// console.log(filme1.diretor)

const filmes: filme[] = [
    filme1,
    {
        titulo:'Falcao Negro',
        duracao: 120,
        genero:'Ação',
        classificacao: 16,
        diretor: 'Ridley Scott'
    },
    {
        titulo:'Como treinar o doguino',
        duracao: 90,
        genero:'fantasia',
        classificacao: 10,
        diretor: 'outro moço'
    }
]


// console.log(filmes)

filmes.forEach(filme => console.log(filme.titulo))


type animal = {
    especie: string,
    categoria: string,
    peso: number
}

const animais: animal[] =[
    {
        especie: 'papagaio',
        categoria: 'ave',
        peso: 0.300
    },
    {
        especie: 'lobo',
        categoria: 'canino',
        peso: 20.000
    },{
        especie: 'camaleao',
        categoria: 'reptil',
        peso: 0.800
    }
]


animais.forEach(animal => console.log(animal.especie))