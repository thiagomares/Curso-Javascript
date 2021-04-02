/*
    Tratando erros

    Try, Catch, Throw e Finally

    O try irá tentar realizar uma ação que pode potencialmente retornar algum erro
    o catch irá retornar alguma coisa para que aquele erro não ocorra
    e o throw a gente pode lançar um erro qualquer

*/

function teste(valor1, valor2){
    if (typeof valor1 !== 'number' || typeof valor2 !== 'number'){
        // throw ('Preciso de um valor numerico');
        throw new Error ('Os valores precisam ser numericos');
    }

    return valor1 + valor2;
}

try{
    // Este bloco irá rodar se tiver tudo certo com o codigo
    console.log(teste(1, 2));
    console.log(teste('1', 2));
} catch(erro){
    // Já esta irá retornar caso tenha algum erro    
    console.log("Xiii, deu ruim!");
    console.log(Error);
} finally{
    // Esta estrutura sempre irá executar, caso seja executada, entretanto, pode ser omitida
}