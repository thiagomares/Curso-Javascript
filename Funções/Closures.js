// Closure
// Closure nada mais é que a habilidade da função poder acessar seu escopo lexico

// Escopo Global

function CriaOutra(nome) {
  // Escopo Local mais externo
  return function Nome() {
    // Escopo Local mais interno
    return nome;
  };
}

const OutraFunção = CriaOutra("Thiago"); // Aqui estamo acessando o escopo lexico desta função
console.log(OutraFunção());
