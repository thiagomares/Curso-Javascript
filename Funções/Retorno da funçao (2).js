/**
 *  Retorno de funções
 * 
 * 
 * Todo return em uma funçao, ela retorna um valor e em seguida ela encerra a função. OU SEJA, o que estiver
 * depois da palalvra return será 
 * 
 *
 */

let função = (a, b) => 
{
    return a + b;
};

console.log(função(1, 2));

// Utilizando a técnica da matrioska
// O que é uma matrioska? é uma aninhação de métodos

function calc (multiplicador) 
{
    return function (n)
    {
        return n * multiplicador;
    };
}

let multiplicador = calc(2);
// quando criamos esta variavel recebendo o valor processado, nos transformamos esta variável em um objeto que processou o valor x internamente
let num = calc(9);

console.log(multiplicador(2)); 
// e como transformamos esta variavel em uma função(objeto), ele assume o valor da função interna
console.log(num(9));