// criando um combo com Map, reduce e filter

const numeros = [1, 3, 34, 5, 22.6, 12, 41, 29];

const pares = numeros.filter(valor => valor % 2 === 0).map(valor => valor * 2).reduce((valor, acumulador) => acumulador + valor);

console.log(object);