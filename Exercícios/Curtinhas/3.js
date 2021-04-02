// Verificar se um dado numero é divisível por 3 e/ou por 5 e retornar uma mensagem

function verificadora(verifica){
    
    if (verifica % 3 === 0 && verifica % 5 === 0){
        return('Tres e Cinco');
    }
    if (verifica % 3 === 0){
        return('Três');
    }
    if(verifica % 5 === 0){
        return('Cinco');
    }
    if (verifica % 2 === 0){
        return('Dois')
    }
    if (verifica % 7 === 0){
        return('Sete')
    }
    if (typeof verifica === NaN){
        return verifica;
    }

    return verifica;
}

for (let i = 0; i <= 100; i++){
    console.log(i,verificadora(i));
}