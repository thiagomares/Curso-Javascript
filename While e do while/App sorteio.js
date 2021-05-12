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
  return a - b;
}

// Laço para que os números sejam sorteados
while (contador <= 5) {
  sorteio = random();

  if (sorteio >= 1 && sorteio <= 60) {
    if (sorteio === NumerosSorteados.indexOf(sorteio)) {
      NumerosSorteados.pop(NumerosSorteados.indexOf(sorteio));
    }
    else {
      NumerosSorteados[contador] = sorteio;
      NumerosSorteados.sort(ordenar);
      contador++;
    }
  }
}

console.log(NumerosSorteados);
