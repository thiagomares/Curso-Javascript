let rand = random(1, 60);
const min = 1;
const max = 60;
let contador = 0;
let NumerosSorteados = [];
let sorteio = 0;


// Função que gera um numero automaticamente
function random() {
  const r = Math.random() * 100;
  return Math.floor(r);
}

// Função para ordernar os numeros dentro do array
function ordenar(a, b) {
  return a - b
}

while (contador <= 5) {

  sorteio = random();

  if (sorteio >= 1 && sorteio <= 60) {
    NumerosSorteados[contador] = sorteio;
    NumerosSorteados.sort(ordenar);
    contador++;
  } else if (sorteio < 1 || sorteio > 60) {
    console.log("numero invalido");
  }
}

console.log(NumerosSorteados);
