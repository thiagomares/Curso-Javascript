/*
    For Of

    O For of interage com a string de maneira diferente do for in, por exemplo, ao invés de endereçarmos o valor no console log, como se fosse uma especie de acesso de memória, o for of faz com que os valores vão para a variavel de controle do iterador
*/

const nome = 'Thiago'

for (let i in nome) // Aqui o i vai fazer uma contagem a partir do numero de valores que tem dentro da string
{
    console.log(nome[i])
}

for (let contador of nome)
// neste caso, o contador irá fazer a contagem dos dados, como um array, e quando ele for somando a ele, ele vai exibindo o que está naquela posição de memória
{
    console.log(contador)
}

let obj = {}

obj.nome = "Thiago"
obj.sobrenome = "Mares"
obj.profissão = 'Engenheiro'

console.log (obj.nome, obj, obj.nome.length)