let numero = prompt('Digite um valor');
const NumeroTitulo = document.getElementById('Numero-Titulo');
const texto = document.getElementById('Texto')

NumeroTitulo.innerHTML = numero;
texto.innerHTML = ' ';
texto.innerHTML += `<p>A raiz quadrada do seu numero é ${numero ** (1/2)} </p>`;


if (Number.isInteger(numero) == true){
    texto.innerHTML += `<p>Seu número é um numero inteiro </p>`;
}
else {
    texto.innerHTML += `<p> Seu número não é um número inteiro </p>`;
}
if(Number.isNaN(numero) == true) {
    texto.innerHTML += `<p> Seu número não é um dado válido </p>`;
}
else {
    texto.innerHTML += `<p> Seu número é um dado válido </p>`;
}
texto.innerHTML += ` <p> Seu número arredondado para baixo é ${Math.floor(numero)} </p`;
texto.innerHTML += `<p> Seu numero arredondado para cima é ${Math.ceil(numero)}</p>`
texto.innerHTML += `<p> Seu numero com duas casas decimais é ${numero.Fixed(2)}</p>`

console.log(numero.isInteger());