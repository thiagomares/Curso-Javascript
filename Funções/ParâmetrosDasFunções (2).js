/**
 * Parâmetros da Funções
 * 
 * 
 *  Na maioria das linguagens da programação, se indicarmos um parâmetro para uma função sem parâmetro, ele retornará erro, contudo, no javascript, mesmo se vc retornar um parâmetro para uma função sem parametro, ele não irá retornar erros, pois ele armazena os parametros como um dictionary.
 */

let Dict = [];

// Exemplo de uma função sem parâmetro
function Função() {
    console.log('Olá Mundo');
    Dict = arguments;
    // Quando temos uma função sem parâmetro e indicamos um valor de parâmetro, ele irá será armazenado nesta especie de objeto
}

// Para podermos pular o valor de um parâmetro, temos que utilizar o valor undefined
function OutraFunção(a, b = 2, c = 10) {
    return a + b + c;
}

// Utilizando de atribuição por desestruturação com objetos
function Desestruturação({ nome, sobrenome, idade }) {
    console.log({ nome, sobrenome, idade });
}

// Utilizando de atribuição por desestruturação com arrays
function DesestruturaçãoArrays([nome, sobrenome, idade]) { console.log(nome, sobrenome, idade); }

Função('Valor', 'Teste');
console.log(Dict);
console.log(typeof (Dict));
console.log(typeof (arguments)); // OBS: Podemos iterar sobre este objeto argumentos.
console.log(OutraFunção(2, undefined, 3));

// Fazendo desestruturação a partir de um dado hardcoded
Desestruturação({ nome: "Thiago", sobrenome: "Mares", idade: 25 });

// Fazendo desestruturação a partir de um dicionário
const dicionário = { nome: "Thiago", sobrenome: "Mares", idade: 25 };
Desestruturação(dicionário);

// Fazendo desestruturação a partir de um array
const Matriz = ["Thiago", "Mares", 25];
DesestruturaçãoArrays(Matriz);
