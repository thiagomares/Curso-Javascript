/** 
 * Funções contrutoras - Constructor Functions
 * 
 * Funções Construtoras também retornam objetos
 * 
 * Na Função construtora, nos devemos realizar a declaração de forma diferente
*/

function Pessoa(nome, sobrenome, altura, peso) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.altura = altura;
    this.peso = peso;
    this.imc = function() {
        let imc = this.peso / (this.altura * this.altura);
            imc = imc.toFixed(2);
            return `${this.nome} ${this.sobrenome} tem ${this.altura} e pesa ${this.peso} Kg. Seu IMC é ${imc}`;
    };
}

// Para utilizarmos a função construtora, precisamos NECESSARIAMENTE colocar a palavra reservada new com o Nome da função

let p1 = new Pessoa('Thiago', 'Mares', 1.78, 102);
let p2 = new Pessoa('Gustavo', 'Mares');

console.log(p1.nome);
console.log(p2.sobrenome);
console.log(p1.imc());