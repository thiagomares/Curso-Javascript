// Funções Recursivas

/*
*   Funçoes recursivas são funções que chamam elas mesmas
*/

function Recursiva(max)
{
    if (max > 10) return;
    max++;
    console.log(max);
    Recursiva(max); // Aqui a propria função está se chamando
}

Recursiva(0);