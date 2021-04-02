/*jshint esversion: 6 */

/*
    Break e continue

    Break e continue são dois tipos de pontos de paradas do codigo, ou seja, podemos forçar a parada de laços de repetição no meio dele, caso alguma outra condição pré estabelecida que desejamos a parada do codigo

    No caso do break, ele ira encerrar todo a iteração. No caso do Continue, ele irá pular o restante da iteração e vai fazer a proxima tarefa

*/

const Numeros = [1, 2, 3, 4, 5, 6, 7];

for (let num of Numeros) {

    if (num === 3) {
        continue; // Aqui o continue irá pular o if e o console log abaixo quando chegar no 3
    }

    if (num === 5){
        break; // Já no break ele vai encerrar o laço por completo
    }

    console.log(num);
}

