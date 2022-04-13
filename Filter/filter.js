// Filtrando Arrays

const numeros = [1, 3, 34, 5, 22.6, 12, 41, 29];

const numerosFiltrados = numeros.filter(valor => valor > 10);
numerosFiltrados.sort((a, b) => a - b);

// Nestas duas linhas de cima, nos estamos fazendo algo que é muito parecido com o que fizemos em python, que é passar uma função lambda, so que não precisamos digitar lambda, basta fazer direto
const pessoas = [
    {nome: "Thiago", idade: 26},
    {nome: "Ana Clara", idade: 19},
];

const nome = pessoas.filter(objeto => objeto.nome.length > 7)
const vaidoso = pessoas.filter(obj => obj.idade > 20);
console.log(nome, vaidoso);
