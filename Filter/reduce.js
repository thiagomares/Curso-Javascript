/* 
    Reduce

    Assim como temos no python, o reduce serve para reduzir um array para menos valores
*/

const numeros = [1, 3, 34, 5, 22.6, 12, 41, 29];

const total = numeros.reduce(function (acumulador, valor) {
    if (valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []);

// retornando somente os pares

const pares = numeros.filter(valor => valor % 2 === 0);
console.log(pares);

// e Dobrando eles
console.log(pares.map(valor => valor * 2));