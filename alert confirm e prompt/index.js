alert('Olá, Mundo!')
/*
    O comando alert fará com que o navegador exiba uma mensagem por notificação pop-up
    alertando o usuário de alguma forma, como um logout ou exclusão de algum item que ela
    desejou deletar.
*/

prompt("Digite seu nome")
/*
    o comando window.prompt fará com que o navegador abra uma notificação
    pedindo para que o usuário digite um valor 
*/

confirm("Deseja sair?")
/*
    O comando confirm nada mais é que uma mensagem enviada pelo navegador para o
    usuário esperando uma confirmação. Esta confirmação trava toda a navegação
    até que o usuário dê um retorno. O comando confirm por definição só retorna
    dois valores, no caso os valores booleanos.
*/


/*
    Todos os comandos apresentados podem ser digitados diretamente no console.
    todavia, para os comandos no console, é demandado que se insira previamente
    um prefixo, no caso o comando window. Para declarar qualquer um destes comandos
    é necessário que se indique da seguinte forma:

        window.confirm("mensagem")
*/

let nome = prompt("Digite seu nome");
let senha = prompt("Digite sua senha");
let tentativas = 0;

while (tentativas <= 5){
    if (nome == "Thiago") {
        while (tentativas <= 3)
        if (senha == "Ferreira13"){
            alert("Bem Vindo")
            tentativas = 4;
        }
        else {
            alert("Senha incorreta. Tente novamente")
            if (tentativas == 3){
                alert("Senha bloqueada")
            }
            tentativas++;
        }
        tentativas = 6;
    }
    else {
        alert("usuário não encontrado, Tente novamente")
        tentativas++;
    }
}