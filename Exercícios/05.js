function MeuEscopo (){
    const form = document.querySelector('.formulario');
    const resultado = document.querySelector('.resultado')
    // Primeira forma de se previnir que a pagina atualize
    /*form.onsubmit = function (evento) {
        evento.preventDefaut(); 
        alert('Enviado');
        console.log("Enviado");
    };*/
    
    // Criando um array para salvar os dados
    const pessoas = [];

    // Segunda forma de se previnir que a pagina atualize
    function RecebeForm(evento){
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const idade = form.querySelector('.idade');
        const altura = form.querySelector('.altura');

        pessoas.push({ // aqui nos coletamos o nome para deixar salvo posteriormente, caso utilizemos DB
            nome: nome.value,
            sobrenome: sobrenome.value,
            idade: idade.value,
            altura: altura.value
        });

        console.log(pessoas); 

        resultado.innerHTML = `<p>Olá ${nome.value} ${sobrenome.value}! Você tem ${idade.value} anos e ${altura.value} de altura. Legal!</p>`
    }
    form.addEventListener('submit', RecebeForm);
}
MeuEscopo();

RecebeForm.pessoas();
