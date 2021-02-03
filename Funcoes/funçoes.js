/*
    Funções

    Funções executam açoes. Imagine que tem um bloco de codigo que você envia um valor e ela devolve um valor ou 
    alguma instrução.

    Por exemplo, queremos criar uma mensagem de bem vindo, nos pegamos esta função e damos a ela um parametro que vai 
    receber um valor e dentro deste valor ele irá executar um bloco de codigo específico que tem um comando de impressão na tela
    dizendo bem vindo

    podemos também utilizar funções para realizar alguma tarefa especifica, para termos acesso rápido posteriormente
*/

function Funçao(nome){
    console.log(`Olá, ${nome}`);
}


let nome = 'Thiago';
Funçao(nome);
Funçao('Thalia');

function ValoresIntermediarios(x, y){
    let resultado = x + y; // esta variável é uma variável local
    console.log(resultado);
    return resultado;
}

// Nos não podemos utilizar diretamente resultados de uma função em outra, mas podemos coletar estes dados via uma variavel ou constante

let ValorIntermediario = ValoresIntermediarios(2, 3);
let ValorIntermediario2 = ValoresIntermediarios(31, 3);

// Podemos deixar um valor como parâmetro, caso o usuário não retorne nenhum valor ou todas as condições não sejam satisfeitas

function Totais(x = 1, y = 1){
    let Totais = x * y;
    console.log(`A multiplicação dos dois valores é ${Totais}`);
    return 0;
}

Totais(ValorIntermediario, ValorIntermediario2);

// Construindo uma ArrowFunction
// Uma ArrowFunction nada mais é que uma função escrita de forma diferente, ao inves de toda a estrutura comum, utilizaremos o sinal de arrow =>

let NovaFunçao = n => n ** 0.5;

console.log(NovaFunçao(121));