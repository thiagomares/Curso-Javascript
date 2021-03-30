/*
    For IN

    Este formato do for é basicamente o mesmo for do python, baseando-se em um array ao invés de todos os sets do laço serem declarados
*/

let array = [1, 2, 3, 4, 5];
let i;

for (i in array) {
  console.log(array[i]);
}

// Utilizando objetos

let pessoa = {
  nome: "Thiago",
  sobrenome: "Mares",
  idade: 25,
};

for (let chaves in pessoa) {
  console.log(chaves, pessoa[chaves]);
}
