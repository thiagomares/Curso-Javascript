// Concatenando arrays

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = a1.concat(a2); // Basta usar o concat
console.log(a3);

// Temos também a opção de spread operator
const a4 = [...a1, ...a2];
// Se eu quiser pegar somente os valores de um array literal? Mete o spread também
const a5 = [...a4, ...[12, 13,14]];
console.log(a4, a5);

