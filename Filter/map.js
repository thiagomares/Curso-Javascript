/*
    Função map

    Do mesmo jeito que temos la no python o map, que poderemos modificar o array, no javascript acontece a mesma coisa
*/


const numeros = [1, 3, 34, 5, 22.6, 12, 41, 29];

const numerosModificados = numeros.map(valor => valor ** 2);

console.log(numerosModificados);