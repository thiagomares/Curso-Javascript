const elementos =  [
    {tag: 'div', texto: 'Clube'},
    {tag: 'div', texto: 'Atlético'},
    {tag: 'div', texto: 'Mineiro'}
]
const container = document.querySelector('.container');

const div = document.createElement('div');
for (let i = 0; i < elementos.length; i++)
{
    // Aqui nos vamos coletar os dados do array e vamos fazer uma atribuição por desestruturação
    let {tag, texto} = elementos[i]
    let tagCriada = document.createElement(tag);
    tagCriada.innerHTML = texto
    div.appendChild(tagCriada)
}

container.appendChild(div)