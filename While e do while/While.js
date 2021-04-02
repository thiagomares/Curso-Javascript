/*
    While e do while

    O laço de repetição while é um laço que permite que façamos repetições sem que tenhamos necessariamente uma variável de controle, permitindo assim que tenhamos um loop infinito, como diferentemente do caso do for, que é necessário se criar uma estrutura de controle rígido
*/

let controle = 0;

// Exemplo de um while qualquer
while (controle <= 10) {
    console.log("Eu te amo, tata");
    controle++;
}

function random(min, max) {
    const r = Math.random() * (max - min) - min
    return Math.floor(r)
}

// Exercicio 
let rand = random(1, 60)
const min = 1
const max = 60

console.log(rand)

while (rand !== 10) {
    rand = random(min, max);
    console.log(rand)
}

// Fazendo uma condição do while
/*
    O do while a gente vai indicar primeiro o que o laço ira fazer antes da estrutura de parada do laço

    O do while primeiramente ele irá executar o codigo depois irá verificar a condição de parada, diferentemente do while comum que irá verificar a condição de parada para depois fazer o que está dentro do laço
*/

do {
    rand = random(min, max);
    console.log(rand)
} while (rand !== 10)

// Exercicio 2

