/*
    Função map

    Do mesmo jeito que temos la no python o map, que poderemos modificar o array, no javascript acontece a mesma coisa
*/

const numeros = [1, 3, 34, 5, 22.6, 12, 41, 29];

const numerosModificados = numeros.map(valor => valor ** 2);
console.log(numerosModificados);

const pessoas = [
    {nome: "Thiago", idade: 26},
    {nome: "Ana Clara", idade: 19},
];

// aqui nos estamos limpando tudo que está dentro do objeto e pegando somente o valor, que no caso é nome.
const nomes = pessoas.map(valor => valor.nome); 
// Removendo a chave nome do objeto
const idades = pessoas.map(obj => ({idade: obj.idade}));
// inserindo objetos 
const criaID = pessoas.map((obj, indice) => {obj.id = indice+1; return obj});
console.log(criaID);
console.log(idades);
console.log(nomes);