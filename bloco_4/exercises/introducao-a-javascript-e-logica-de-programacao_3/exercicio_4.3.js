Ultilizando o array abaixo, percorra-o somando todos os valores.
Caso o valor final seja maior que 15, imprima-o.
Caso seja igual ou menor que 15, imprima a mensagem: "valor menor que 16":

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

A resolução do problema acontece em 3 etapas:

1. Interpretação;
2. Criação do algoritmo;
3. Codificação do algoritmo.
