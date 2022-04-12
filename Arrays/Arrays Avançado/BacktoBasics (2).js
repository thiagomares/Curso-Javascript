// Back to basics: Revendo Arrays

// Criando um array
let nomes = ["Thiago", "Gustavo", "Chislainy"];
console.log(nomes[0]);

// Deletando um valor no array
delete nomes[2];
console.log(nomes);

// Nos temos também uma segunda forma para declarar arrays, menos usual, da seguinte maneira
const novoArray = new Array("A", "B", "C");

console.log(novoArray);

// Gerando dados por referência
const novo = nomes; // Desta forma, o que eu faço na variavel novo, reflete no array nomes e vice-versa, para que não afete, temos que fazer uma spread operator

// Isso é um Spread operator
let outroArray = [...nomes];

// Coisas que vimos em arrays:

// deletar o ultimo elemento

// Assim como em python, quando removemos o ultimo valorcom o pop, podemos recuperá-lo, por uma característica do pop
let captura = outroArray.pop();
console.log(outroArray);
console.log(captura);

// verificar o tamanho do array
console.log(outroArray.length);

// Temos o shift, que tem uma característica parecida com a do pop, contudo, ao invés de remover o último elemento, remove o primeiro e desloca os itens seguintes para as posições subsequentes

let MaisUmaVariavel = novo.shift();
console.log(MaisUmaVariavel, novo);

// Podemos adicionar valores no final do array com o método push
outroArray.push('Marilany');
console.log(outroArray);

// No caso do Unshift, ele desloca os elementos em uma posição e adiciona os valores no INICIO do array
outroArray.unshift('Mares');
console.log(outroArray);

// Nos podemos fatiar o nosso array com slice
console.log(outroArray.slice(0, 2));

// Unindo valores de um array para uma string
let nomeando = outroArray.join(' ');
console.log(nomeando);