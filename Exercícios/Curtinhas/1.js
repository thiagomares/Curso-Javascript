// Exercicio que recebe dois valores e retorna o maio reles


function compare(a, b) {
    if (a < b) {
        return b;
    }
    else {
        return a;
    }
}

console.log(compare(12, 33))

// Melhorando o codigo

const maior = (a, b) => a > b ? a : b; console.log(maior(100, 30));
