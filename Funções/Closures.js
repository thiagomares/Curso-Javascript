// Escopo Global

function CriaOutra() {
    // Escopo Local mais externo
    const nome = 'Thiago';
    return function Nome() {
        // Escopo Local mais interno
        return nome;
    };
}

const OutraFunção = CriaOutra();
console.log(OutraFunção());

