/*
    Funções Fábrica - Factory Functions

    Funções fábrica são funções que chamam objetoss
*/

function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,

        fala: function (assunto) {
            return `${this.nome} ${this.sobrenome} está falando sobre ${assunto}`;
        },

        get nomeCompleto() {
            let NomeCompleto = this.nome + ' ' + this.sobrenome;
            return NomeCompleto;
        },

        // Criando um setter 

        set nomeCompleto(splitter) {
            splitter = splitter.split(' ');
            this.nome = splitter.shift();
            this.sobrenome = splitter.join(' ');
            return splitter;
        },
        
        altura,
        peso,

        // Criando um getter

        get imc() {
            let imc = this.peso / (this.altura * this.altura);
            imc = imc.toFixed(2);
            return `${this.nome} ${this.sobrenome} tem ${this.altura} e pesa ${this.peso}. Seu IMC é ${imc}`;
        }
    };
}

/*
    A Palavra this irá chamar objeto por objeto. Por exemplo: Se tivermos duas pessoas, poderemos criar dois objetos diferentes e separados para cada um destes métodos.
*/

const p1 = criaPessoa('Thiago', 'Mares', 1.78, 102);
p1.nomeCompleto = 'Thiago Ferreira Mares';
console.log(p1.fala('Atlético'));
console.log(p1.nomeCompleto);
console.log(p1.sobrenome);
console.log(p1.imc);

// Podemos simular que uma função funcione como um atributo, utilizando get

console.log(p1.imc);