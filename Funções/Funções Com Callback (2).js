/* 
    Funções com callback

    Funções com callback são funçoes que são executadas quando alguma ação é realizada em meio ao código, como uma especie de um trigger.
*/

function f1(callback) {
    setTimeout(() => {
        console.log("f1");
        if (callback) callback();
    }, 800); 
}

function f2(callback){
    setTimeout(() => {
        console.log("f2");
        if (callback) callback();
    }, 1400 /* Da pra mudar este valor se eu não fosse preguiçoso e fizesse uma funçao pra automatizar isso */); 
}

function f3(callback) {
    setTimeout(() => {
        console.log("f3");
        if (callback) callback();
    }, 2000); 
}

// O que nos vamos fazer: se nos dermos uma condição que o if pede para que execute, ele irá chamar a funçao

f1(function (){
    f2(function () {
        f3();
    });
});

// Uma forma mais elegante de fazer a mesma coisa que estes callbacks são desta forma

f1(f1Callback);

function f1Callback() {
    f2(f2Callback);
}

function f2Callback() {
    f3();
}