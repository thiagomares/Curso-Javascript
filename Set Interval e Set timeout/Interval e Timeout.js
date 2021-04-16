/**
 * Set interval e set timout
 *
 * o Set interval fará com que o que exibamos tenha uma frequencia x
 * 
 * já o set timeout faz a mesma função do set interval, so que ao contrário, para parar esta frequencia
 */

function mostraHora() {
  let hora = new Date();
  return hora.toLocaleTimeString('pt-BR', {hour12: false});
} 

const timer = setInterval(function (){ // Esta é a maneira mais comum de fazer este método desta forma
  console.log(mostraHora());
}, 1000);

setTimeout(function(){
  clearInterval(timer);
}, 5000+1000);
