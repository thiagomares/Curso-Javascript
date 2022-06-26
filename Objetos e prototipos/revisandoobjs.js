// Mas o que é um objeto?

const objeto = {
    nome: 'Thiago',
    sobrenome: 'Mares'
};


// Temos duas formas de acessar um dado de um objeto
console.log(objeto['nome']);
console.log(objeto.sobrenome);

// Porem, se ele vier de forma dinamica, podemos fazer da seguinte forma
const chave = 'sobrenome';
console.log(objeto[chave]);
