// O foreach é uma variação do for clássico e somente pode ser usado para arrays

const numeros = [1, 3, 34, 5, 22.6, 12, 41, 29];
let total = 0;
numeros.forEach(element => {
    let dobro = 0;
    dobro += element;
    return dobro;
});

console.log(dobro);