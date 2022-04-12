/*
    Realizar a leitura de dois valores (altura e largura) e verificar se a imagem ta em modo paisagem ou em modo retrato
*/

const foto = (altura, largura) => largura > altura ? "Paisagem" : 'Retrato';
console.log(foto(10,1080));