// Mais material sobre strings

// Para escaparmos as aspas de uma variavel string, basta inserir uma contrabarra internamente a string da seguinte forma

let variavel = ("Olá \"mundo\"");

console.log(variavel);

/*
    Variáveis do tipo string são possíveis de se obter um caractere endereçando onde este caractere está, da seguinte forma:

    variável[endereço da memória]

    Caso esta string não tenha nada no endereço da memória o qual você indicou e ou um valor negativo, o console irá indicar que a posição é undefied

    Ou seja, toda a string começa no valor de 0, e assume que todos os valores nela escritas são positivas.
*/

variavel = ("Thiago Mares");

console.log(variavel[3]);

// uma outra forma de se exibir um caractere em um determinado espaço de memória

console.log(variavel.charAt(0)); // Para este método, ao invés de utilizarmos colchetes, utilizaremos parentesis

// Para concatenar valores de uma string, podemos utilizar dois metodos]
// O primeiro método é um mais conhecido, é inserindo + entre duas variáveis do tipo string, desta forma, o javascript irá concatenar naturalmente estas duas variáveis

let outravariavel  = (" Tudo bem?");

console.log(variavel + outravariavel);

// A segunda forma é menos utilizada. porém funciona da mesma maneira

console.log(variavel.concat(outravariavel));

// OBS.: É muito mais agradável utilizar templatestrings do que utilizar o comando .concat

// Uma terceira forma de se concatenar strings é utilizando crases

console.log(`${variavel} é torcedor apaixonado pelo St. Louis Cardinals, time da Major League Baseball. O St. Louis Cardinals é 11 vezes campeão da World Series, a Final do Beisebol Americano`)

// O comando indexOf mostra exatamente onde aquele texto na string começa.

console.log(variavel.indexOf('Thiago'));

// É possível também tentar descobrir se tal valor dentro da string existe após aquela posição indicada

console.log(variavel.indexOf("Thiago", 2));

// Para encontrarmos o ultimo valor de um determinada parte da string, seja ela uma palavra inteira ou uma unica letra, utilizamos o comando lastindexof

console.log(variavel.lastIndexOf("o"));

// O comando match fará com que o codigo encontre valores dentro de um espectro de valores
// A flag g fará com que ele somente mostre os valores que foram encontrados dentro daquele espectro, quando 
// esta flag não apresenta nada, ele mostrara as informaçoes desta forma: [ 'h', index: 1, input: 'Thiago Mares', groups: undefined ]

console.log(variavel.match(/[a-z]/));

// O search retornara o indice onde se encontra aquele valor

console.log(variavel.match(/a/));

// Por sua vez, o comando replace fara com que possa ser mudado o valor da string

console.log(variavel.replace('Mares', 'Ferreira Mares'));

// Também é possível apenas modificar um valor dentro de todo

console.log(variavel.replace(/M/g, 'S'));

// Para medir o tamanho da string, utilizamos o comando lenght

console.log(variavel.length); 

// para fazermos slice de uma string. Para fazermos o slice, devemos inserir o valor inicial e o final, separados por vírgula

console.log(variavel.slice(0, 6));

// Podemos começar a fazer o slicing de tras para frente, inserindo um valor negativo no range

console.log(variavel.slice(-10, -2));

// Para fazer slicing da string de cada palavra da string

variavel = 'Thiago Ferreira Mares'

console.log(variavel.split(' '));


// Para deixar toda a string em maiúsculas, utilizamos o comando toUpperCase. Sim, no formato do CamelCase

console.log(variavel.toUpperCase());

// Para deixar tudo em minusculas, utilizamos o comando toLowerCase