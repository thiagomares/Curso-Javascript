// A primeira variável tem que assumir o valor da segunda variável,  a segunda variável assume o da terceira e a terceira assume o valor da primeira


let a = 'a'; // B
let b = 'b'; // C
let c = 'c'; // A

const letraA = a;
const letraB = b;
const letraC = c;

a = letraB;
b = letraC;
c = letraA;

console.log(a, b, c);


// Outra froma de fazer este exercício

 a = 'a';
 b = 'b';
 c = 'c';

[a, b, c] = [b, c, a]; // Desta forma, não é necessário utilizar variáveis de controle para que possamos trocar as letras, ele vai simplesmente vai assumir tudo ao mesmo tempo

console.log(a, b, c);