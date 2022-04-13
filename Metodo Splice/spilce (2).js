// Método Splice

const nomes = ['Maria', 'João', 'Eduardo', 'Thiago', 'Ana Clara'];

// Indice, delete(quantos elementos quero apagar), quantos elementos que quero adicionar
// simulando um pop
const removidos = nomes.splice(4, 1);
console.log(nomes, removidos);

const adicionados = nomes.splice(3, 1, 'Ana Clara');
console.log(nomes, adicionados);

// Simulando um push
nomes.splice(nomes.length, 0, 'Gustavo');
console.log(nomes);

// e por fim um unshift
nomes.splice(0, 0, 'Thiago', 'Mares');
console.log(nomes);

nomes.sort();
console.log(nomes);