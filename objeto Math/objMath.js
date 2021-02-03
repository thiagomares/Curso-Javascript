let num1 = 12.3312301;

// Para arredondar para baixo um valor decimal

let num2 = Math.floor(num1)
console.log(num2);

// E para arredondar para cima um valor decimal utilizamos ceil

console.log(Math.ceil(num1));

// Para arredondarmos para o valor mais proximo possível, utilizamos o comando round

console.log(Math.round(num1));

// Já para descobrirmos qual é o maior valor em uma série de numeros, utilizamos o comando max

console.log(Math.max(1, 2, 3, 4, 5, 9));

// para descobrirmos o menor, utilizamos o comando min

console.log(Math.min(1, 2, 3, 4, 5, 9));

// Para gerar um numero aleatorio qualquer compreendido entre 0 e 1, utilizamos o comando math
// porém, o 1 nunca é incluido

console.log(Math.random());

// para obtermos o valor do pi

console.log(Math.PI);

// para fazermos uma potenciação, utilizamos o pow
// onde o primeiro valor é a base e o segundo valor é a potenciação, sempre lembrando que quando temos um valor negativo
// esta potenciação se torna uma raiz com o valor que está negativo.

console.log(Math.pow(1,-22));

