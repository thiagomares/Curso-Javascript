/*
    Funções Imediatas = IIFE = Imediatelly Invoked Function Expression


    Funções Imediatas são funções que geralmente são funcções anonimas que são chamadas imediatamente convocadas assim que são criadas, com o intuito de protegerem o conteudo nelas inserido.
*/

// Função comum
function qualquerCoisa() {
    console.log('135915');
}

qualquerCoisa();

// Função imediatamente invocada
(function () {
    let nome = 'Thiago';
    console.log(nome);
})(); /* <- Este () é a indicação da convocação da função */

let nome = 'Thalia';
console.log(nome);