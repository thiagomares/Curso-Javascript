/*
    Objetos

    Objetos em javascript funcionam como uma espécie de dicionário em Python, ou seja, podemos acessar valores dentro deste objeto, desde que fornecemos ao código uma forma de acessar estes valores.


*/

const pessoas = {
    nome: 'Thiago',
    sobrenome: 'Mares',
    idade: 25
};

console.log(pessoas.nome);

// Podemos criar uma factory. Uma factory nada mais é que um objeto dentro de uma função

function Pessoas(nome, sobrenome, idade){
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}

let p1 = Pessoas('Thiago', 'Mares', 25);
let p2 = Pessoas('Thalia', 'Fernandes', 22);
let p3 = Pessoas('Gustavo', 'Mares', 24);

console.log(p1);
console.log(p2);
console.log(p3);

// Criando um método
// Um método é criar uma função dentro de um objeto

const pessoal = {
    nome: "Thiago",
    sobrenome: "Mares",
    idade: 25,

    fala(){ // isso é uma função, porem dentro de um objeto, não precisamos declará-la
        console.log(`${this.nome} está falando oi`) 
        // Quando inserimos o comando this, dentro de uma função encapsulada em um objeto, nos podemos utilizar as "variaveis" internas, sem nenhum problema, como demonstrado logo acima, que faz com que o objeto nome seja impresso. 
    }
}

pessoal.fala();