// Ultilizando o array abaixo, percorra-o somando todos os valores.
// Caso o valor final seja maior que 15, imprima-o.
// Caso seja igual ou menor que 15, imprima a mensagem: "valor menor que 16":

let fruits = [3, 4, 10, 1, 12];
let somaDosValores = 0;
for (let index = 0; index < fruits.length; index += 1) {
    somaDosValores += fruits[index];
    if (somaDosValores > 15) {
        console.log(somaDosValores);
    } else {
        console.log("valor menor que 16");
    } 
}

// A resolução do problema acontece em 3 etapas:

// 1. Interpretação;
// 2. Criação do algoritmo;
// 3. Codificação do algoritmo.

// o valor que salvo na variável N em que o resultado que será impresso pelo console.log dará 55?
const n = 9;
let resultado = 100;
for (let i = 0; i <= n; i += 1) {
    resultado -= i;
}
console.log(resultado); // 55

// somar valores de 1 até o número passado para a função.
const n = 5;
let resultado = 0;
for (let i = 0; i <= n; i += 1) {
    resultado += i;
}
console.log(resultado); // 15


// Exercício
// 01 - faça um programa que, dado um valor n, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n
let n = 5;
let quadrado = '*';
for (let index = 1; index <= n; index += 1) {
    console.log(`${quadrado}`.repeat(n)); // ***** ***** ***** ***** *****
}

// 02 - imprima um triângulo retângulo com 5 asteriscos de base.
let piramideBase = 5;
let asteristico = '*';
let espacos = '';
let piramideMeio = (piramideBase + 1) / 2;
let ladoEsquerdo = (piramideMeio + 1);
let ladoDireito = (piramideMeio - 1);
for (let indexLinha = 0; indexLinha < piramideMeio; indexLinha += 1) {
    for (let indexColuna = 1; indexColuna <= piramideBase; indexColuna += 1) {
        if (indexColuna > ladoDireito && indexColuna < ladoEsquerdo) {
            espacos += asteristico;
        } else {
            espacos += ' ';
        }
    }
    console.log(espacos);
    espacos = '';
    ladoDireito -= 1;
    ladoEsquerdo += 1;
}