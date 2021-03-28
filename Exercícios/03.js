let nome = prompt("digite seu nome");
console.log(nome);


// O comando document.body.innerHTML irá adicionar textos a tela

document.body.innerHTML = `Seu nome é ${nome} <br />`;
document.body.innerHTML += `Seu nome tem ${nome.length} letras <br />` ;
document.body.innerHTML += `A segunda letra do seu nome é: ${nome[1]} <br />`;
document.body.innerHTML += `O primeiro indice da letra a do seu nome é ${nome.indexOf('a')}<br />`;
document.body.innerHTML += `O último indice índice da letra a do seu nome é ${nome.lastIndexOf('a')}<br />`;
document.body.innerHTML += `As ultimas 3 letras do seu nome são: ${nome.slice(-3)} <br />`;
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(' ')} <br />`;
document.body.innerHTML += `Seu nome com todas as letras maúsculas: ${nome.toUpperCase()} <br />`;
document.body.innerHTML += `Seu nome com todas as letras minusculas: ${nome.toLowerCase()} <br />`; 
