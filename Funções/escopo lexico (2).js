/*
    Escopo Lexico

    Escopo léxico é determinado pela estrutura que o envolve, como uma especie de matrioska.

    Se o ambiente que aquela estrutura se encontra não tem a expressão, ele irá buscar se a expressão esta no ambiente superior.

*/

function Escopo() {
    let nome = "Thiago";

    // Aqui declaramos a variavel na função pai e não temos a declaração dela no retorno da função filha, mas pelo o escopo lexico, ele buscou a variável na função pai

    return function a() {
        return nome;
    };
}

let escopo = new Escopo();

console.log(escopo());