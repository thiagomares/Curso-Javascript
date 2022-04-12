// Funções Geradoras

/* 
    As funções geradoras tem um processamento lento, quase pausando o codigo quando ele é convocado, uma vez que ele tem um recurso chamado lazy evaluation, ou seja, uma avaliação preguiçosa.
*/

function* Geradora() {
    // Para criar uma função geradora, precisamos indicar na sua criação um asterisco (*) logo apos a palavra reservada function
    yield 'Valor';
    // Quando temos um yield, ele tem uma função muito parecida com um return, contudo, diferentemente do return que encerra a função, o yield além de não encerrar a função, ele pode ser declarado mais vezes
    yield 'Valor2';
}

const Retorno = Geradora();
console.log(Retorno.next()/* Para que possamos ver o valor que está inserido dentro da função geradora, precisamos utilizar o método next */);
console.log(Retorno.next()/* Para que possamos ver o valor que está inserido dentro da função geradora, precisamos utilizar o método next */);
console.log(Geradora().next());
console.log(Geradora().next());

// Quando utilizamos o método next, nos vemos uma espécie de dicionário, com chave e valor. Caso queiramos ver especificamente o valor, basta que utilizamos a palavra "value"
console.log(Geradora().next().value);
console.log(Geradora().next().value);


/* Podemos ainda fazer uma função fábrica utilizando função Geradora */

function* Fabrica() {
    yield function () {
        console.log("Olá mundo");
    }

    yield function () {
        console.log("Gol do Atlético");
    }
}

const fabrica = Fabrica();
// Como criamos uma função anonima com yield, para que possamos ver o que está internamente, é necessário que se puxe enderece as funções com constantes


const f1 = fabrica.next

console.log(f1(), f2());
