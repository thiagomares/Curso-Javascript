/*
    Operadores de comparação

    < - Menor que
    <= - Menor ou Igual
    > - Maior que
    >= - Maior ou igual
    == - Igualdade (atribuição) # Não iremos utilizar este
    === - Igualdade estrita*
    != - Diferença # Não iremos utilizar este
    !== - Diferença estrita*
    
    # = Estes tipos somente verificam valor
    * = Estes tipos verificam valor & tipo de dado

    
*/

// Exemplo de uso
console.log(10 > 2);
console.log(2 !== 2);

/*
    Porquê não utilzamos o == ou !=

    estes dois tipos somente verificam se o valor é igual, então ele pode comparar strings com numeros, que são visualmente diferentes, mas com o dinamismo do javascript, converte o tipo para que os dois sejam um mesmo tipo e dai os comparam. Para que nos tenhamos um pouco de uma tipagem forte, utilizamos um = a mais.
*/
