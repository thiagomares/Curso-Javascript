// declaração de funções

// podemos declarar uma função antes de ser criada, como a forma abaixo
falaOi();

// Declaração de função (Function Hoisting)
function falaOi() {
  console.log("Fala Oi");
}

// First-class obj

// Funcção espressão
const Dado = function () {
  console.log("Dado");
};

Dado();

// Arrow Function

const Arrow = () => {
  console.log("Função Seta");
};
Arrow();

//Função Aninhada como objeto

const Funçao = {
  falar: function () {
    console.log("Testando");
  },
};

Funçao.falar();
