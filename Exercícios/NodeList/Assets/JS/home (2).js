const paragrafos = document.querySelector('.paragrafos');
const TodosParagrafos = document.querySelectorAll('p'); // Este comando faz com que consigamos pegar todos os elementos comuns (como todos os paragrafos de um documento) para dentro de um array
const EstiloFundo = getComputedStyle(document.body); // Este método faz com que consigamos pegar o estilo do documento 
const CorDeFundo = EstiloFundo.backgroundColor;


for (let cont of TodosParagrafos)
{
    cont.style.backgroundColor = CorDeFundo;
    cont.style.color = '#FFFFFF';    
}
console.log(CorDeFundo, CorFundoBloco)