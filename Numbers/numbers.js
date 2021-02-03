let num1 = 3.14159265359;
let num2 = 2.3;

// Para converter um number para uma string, utiliza-se o comando "toString()"

// num1 = num1.toString();
console.log(typeof num1);

// Convertendo um numero para um binario

console.log(num1.toString(2)); // Desta forma, conseguimos descobrir qual é o valor binario de qualquer numero


// Para simplificar um numero grande, usamos o comando to fixed, e nele colocamos um limite de casas apos a virgula
console.log(num1.toFixed(2));

// Para descobrirmos se tal numero é um valor inteiro ou um valor real, utilizamos o metodo Number.isInterger()
// Caso retorne falso, é um numero com casas decimais, caso verdadeiro, é um numero real.
console.log(Number.isInteger(num1));

// Para descobrirmos se um valor é um número ou não, utilizamos o comando Number.isNaN
// Caso retorne true, o valor é uma string, caso false, é um numero
// só funciona com calculos
let nome;
nome = num1 * 'tata';
console.log(Number.isNaN(nome));

/*
    O javascript não tem a capacidade de fazer contas com valores com ponto flutuante de forma precisa
    ele sempre retornará valores com alguma imprecisão, e para consertarmos esta imprecisão, utilizamos o
    comando parseFloat, da seguinte forma
*/

num1 += num2;
num1 = parseFloat(num1);
console.log(num1.toFixed(2));
