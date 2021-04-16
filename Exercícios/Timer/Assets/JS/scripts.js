// Estas variáveis vão fazer o controle do que irá aparecer na tela
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const parar = document.querySelector('.parar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

// Função para criar um timer
function criaHora(segundos){
    const data = new Date(segundos * 1000);

    return data.toLocaleTimeString('pt-BR', {hour12: false, timeZone: 'UTC'});
}

// função de exibir a hora a cada 1 segundo
function iniciaRelogio(){
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = criaHora(segundos);
    }, 1000);
}


// Adicionando os controladores dos botões
iniciar.addEventListener('click', function(evento){
    clearInterval(timer);   
    relogio.classList.remove('pausado');
    iniciaRelogio();
});
parar.addEventListener('click', function(evento){
    clearInterval(timer);
    relogio.classList.add('pausado');
});
zerar.addEventListener('click', function(evento){
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
});
