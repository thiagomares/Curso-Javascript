/*
    Arrays - Vetores

    A gente pode pensar que um array é uma lista de coisas, uma coleção, por exemplo.

    Para criar um array, basta fazer da seguinte maneira:

        let lista = [item1, item2, item3...,itemX];

    Tal como em python, o javascript também recebe qualquer tipo de valor, porém, misturar vários tipos de valores
    em um array não é uma boa prática de programação.

*/

let nomes = ['Thiago', 'Ferreira', 'Mares'];

// Podemos modificar algum valor endereçando seu valor, da seguinte forma:

nomes[1] = 'James';

console.log(nomes)

// Quando endereçamos um valor que não existe no array, ele irá criar um novo valor

nomes[3] = "Thalia";

console.log(nomes);

// Descobrirmos o tamanho de um array nos utilizamos lenght

console.log(nomes.length);

// Podemos também descobrir o tamanho de um item do array, apenas endereçando qual array ele está

console.log(nomes[0].length);

// Para adicionar valores automaticamente a um array, nos podemos usar a tecnica de inserir um valor misturado com o lenght

nomes[nomes.length] = "da Cruz";
nomes[nomes.length] = "Fernandes";

console.log(nomes);

// Podemos inserir um elemento ao final do array utilizando o comando push

nomes.push("Tata");

console.log(nomes);

/* 
    Podemos inserir elementos ao final da lista com o comando unshift. 

    O unshift fará com que todos os valores sejam empurrados em uma casa.
*/

nomes.unshift("Titi");

console.log(nomes.indexOf('Thiago'));

// Removendo itens do final do array utilizando o comando pop

const removido = nomes.pop();
console.log(removido);

// Removendo itens do inicio da lista, utilizando shift

const RemovidoInicio = nomes.shift();
console.log(RemovidoInicio);

// Podemos acessar valores que estão vazios em javascript. Porém, eles retornarão que são indefinidos (undefined)
console.log(nomes[12]);

// Podemos ainda dividir um array com facilidade, utilizando o comando slice, porem, indicando até onde vai o corte

console.log(nomes.slice(0, 3));


/*
    Podemos criar uma espécie de constante mutavel, utilizando arrays

    Um array pode facilmente mudar seus valores, basta endereçar qual valor da memoria gostariamos de modificar e assim modificamos
    e a mesma regra vale para constantes, por incrivel que isso pareça, porem, nos não podemos modificar uma constante array para outra coisa, como uma string ou um tipo interger, por exemplo, mas, os valores internos da lista, e a quantidade de itens da lista podem ser facilmente adicionados, pois as listas são passíveis de modificação. Alias, quando criamos uma lista, ela tem todos os valores nela, porém, como estes endereços estão completamente vazios, eles só mostrarão que 
*/

// Exemplo de Constante mutavel

const Constante = [1, 2, 3, 4, 5]
Constante[5] = 6;

console.log(Constante);