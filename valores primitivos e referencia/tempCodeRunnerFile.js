/*
    Tipos de dados primitivos e dados por referência

    São tipos de dados primitivos: String, number, booleanos, indefinidos(undefined) e nulos (null)
    Uma característica dos dados primitvos são que eles são imutaveis, eles são o que eles são.

    São tipos de dados por referencia: Arrays(lista), Objetos e Funções.
*/

let thiago = 4;
thiago = "thiago";
console.log(thiago);
console.log(typeof thiago);

let Lista = ['Thiago', 'Ferreira', 'Mares'];

// Sobre Listas: Podemos endereçar o valor que queremos visualizar e ainda, com a propriedade de endereçamento podemos consultar qual é o valor que está inserido dentro da posição de memória daquela casa que estamos tentando visualizar na lista.
console.log(Lista[0][0]); 

// Em javascript nos conseguimos facilmente mudar uma variável de string para inteiro, por exemplo, contudo, nos não conseguiriamos mudar somente um espaço da memoria, ou muda-se tudo, o continua com o valor que lá esta.Porém, o javascript não irá apresentar nenhum tipo de erro, somente não irá mudar seu valor.

thiago[0] = 5;
console.log(thiago);

// Independente do que aconteça, quando atribuimos o valor de uma variável a outra, a segunda variável somente vai receber o valor da primeira variavel somente quando for atribuida, não toda vez que a primeira muda de valor.
let a, b;
a = b;
a = 2;

console.log(b);

// Diferentemente que acontece com dados primitivos, as listas, as referencias e os objetos podem ser modificados livremente pelo codigo, e mais, quando atribuimos um valor de referencia em outro, se fizermos alterações em a, as alterações vão se refletir em b e vice versa

let lista = [1, 2, 3];
let ListaSecundaria = Lista;

lista[lista.length] = 4;
console.log(ListaSecundaria);
