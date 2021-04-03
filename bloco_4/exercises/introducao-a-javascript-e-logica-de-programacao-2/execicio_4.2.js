//conteúdo do dia 
//exercísio de fixação 4.2 / JavaScript - Array e loop For

//ARRAY

// váriaveis simples
let pizza1 = '4 Queijos';
let pizza2 = 'Frango com Catupiry';
let pizza3 = 'Marguerita';
let pizza4 = 'Palmito';
let pizza5 = 'Chocolate';

console.log(pizza1, pizza2, pizza3, pizza4, pizza5); //4 Queijos Frango com Catupiry Marguerita Palmito Chocolate

//variaveis compostas - usaremos o 'array'
let pizzas = ['4 Queijos', 'Frango com Catupiry', 'Marguerita', 'Palmito', 'Chocolate'];

console.log(`Menu de sabores: ${pizzas}`); //Menu de sabores: 4 Queijos,Frango com Catupiry,Marguerita,Palmito,Chocolate
//para 'ver item' por item
console.log(pizzas[0]); //4 Queijos
console.log(pizzas[1]); //Frango com Catupiry
console.log(pizzas[2]); //Marguerita
console.log(pizzas[3]); //Palmito
console.log(pizzas[4]); //Chocolate

//Para 'acrescentar mais um ítem' a lista
pizzas.push('Peito de peru'); //4 Queijos Frango com Catupiry Marguerita Palmito Chocolate Peito de peru

//Para saber o 'tamanho do nosso array'
console.log(pizzas.length) //6

//Para colocar a lista em 'ordem alfabética'
console.log(pizzas.sort()); //'4 Queijos','Chocolate','Frango com Catupiry','Marguerita','Palmito','Peito de peru'

//'laço de repetição' para repetir o indice da nossa lista
for (let index = 0; index < pizzas.length; index += 1) {
    console.log(pizzas[index]); // 4 Queijos Chocolate Frango com Catupiry Marguerita Palmito Peito de peru
}

//Exemplos para praticar
let taskList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];
console.log(taskList.length); //

//Buscando por um indice e armazenando em um variavel
let searchForFirstTask = taskList[0];
console.log(searchForFirstTask); //Tomar café

//Buscando pelo ultimo item e armazenando em um variavel
let searchForLastTask = taskList[taskList.length - 1];
console.log(searchForLastTask); //Brincar com o cachorro

//Adicionando mais um item ao final da lista
taskList.push('Fazer exercícios da Trybe');
console.log(taskList); //[ 'Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe' ]

//Adicionando mais um item ao inicio da lista
taskList.unshift('Revisar conteúdo');
console.log(taskList); //['Revisar conteúdo', 'Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']

//Para remover o ultimo item da lista
taskList.pop();
console.log(taskList); //['Revisar conteúdo', 'Tomar café', 'Reunião', 'Brincar com o cachorro']

//Para remover o primeiro item da lista
taskList.shift();
console.log(taskList); //[ 'Tomar café', 'Reunião', 'Brincar com o cachorro' ]

//Para procurar por item no array
let indexOfTask = taskList.indexOf('Reunião');
console.log(indexOfTask); //1

//Exercício 1
//Obtenha o valor "Serviços" do array menu
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu.indexOf('Portfólio');

console.log(menuServices); // 2

//Exercício 2
//Procure o índice do valor "Portfólio" do array menu
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu[2];

console.log(indexOfPortfolio); //2

//Exercício 3
//Adicione o valor "Contato" no final do array menu
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push('Contato');
console.log(menu); //[ 'Home', 'Serviços', 'Portfólio', 'Links', 'Contato' ]


// LOOP FOR

// Tabuada de um numero
let numero = 5;
for (let index = 1; index <= 9; index += 1) {
    console.log(numero * index); //5 10 15 20 25 30 35 40 45
}

// Usando arrays
let listaDeNomes = ['Joana', 'Maria', 'Lucas'];
for (let indice = 0; indice < listaDeNomes.length; indice += 1) {
    let mensagem = `Boas vindas, ${listaDeNomes[indice]}!`;
    console.log(mensagem); // Boas vindas, Joana! Boas vindas, Maria! Boas vindas, Lucas!
}

//Lista de carros
let cars = ["Saab", "Volvo", "BMW"];
for (let index = 0; index < cars.length; index += 1) {
    console.log(cars[index]); //Saab Volvo BMW
}

//Exercício 1

//Utilize o for para imprimir os elementos da lista groceryList com o console.log()
let groceryList = ["Arroz", "Feijão", "Alface", "Melancia"];
for (let index = 0; index < groceryList.length; index += 1) {
    console.log(groceryList[index]); // Arroz Feijão Alface Melancia
}

// Agora a prática
// Exercício 1 array imprimindo todos os valores
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]); //5 9 3 19 70 8 100 2 35 27
}

// Exercício 2 somar todos os valores contidos no array
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaNumbers = 0;
for (let index = 0; index < numbers.length; index += 1) {
    somaNumbers += numbers[index]; //.. infinito ou quase
}
console.log(somaNumbers); //278

// Exercício 3 média aritmética dos valores contidos no array
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
}
let mediaAritmetica = soma / numbers.length;
console.log(mediaAritmetica); //27.8

// Exercicio 4 - maior que 20, imprima a mensagem: "valor maior que 20 OU MENOR".
if (mediaAritmetica > 20) {
    console.log("valor maior que 20"); //valor maior que 20
} else {
    console.log("valor menor que 20");
}

// Exercício 5 maior valor contido no array
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorValor = 0;
for (let index = 0; index < numbers.length; index += 1) {
    if (maiorValor < numbers[index]) {
        maiorValor = numbers[index];
    }
}
console.log(maiorValor); //100

// Exercicio 6 quantos valores ímpares 
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let quantosImpares = 0;
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 === 1) {
        quantosImpares += 1;
    }
}
console.log(quantosImpares); //6

// Exercício 7 menor valor contido no array
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorValor = Infinity;
for (let index = 0; index < numbers.length; index += 1) {
    if (menorValor > numbers[index]) {
        menorValor = numbers[index];
    }
}
console.log(menorValor); //2


// Exercício 8 - somando de 1 até 25 
let number = 25;
let deUmAVinteCinco = [];
for (let index = 1; index <= number; index += 1) {
    deUmAVinteCinco.push(index);
}
console.log(deUmAVinteCinco); //[ 1,  2,  3,  4,  5,  6,  7,  8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,25 ]

// Exercicio 9 - seguindo o exercicio a cima faça divisão de cada um dos elementos por 2 .
let resultado = [];
for (let index = 1; index <= deUmAVinteCinco.length; index += 1) {
    resultado.push(index / 2);
}
console.log(resultado);

//Bônus 1 Ordem crescente
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];                     // (array-numbers) com numeros variados
for (let index = 0; index <= numbers.length; index += 1) {              // 1° for o index confere o comprimento do array numbers -> 0 1 2 3 4 5 6 7 8 9
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {  // 2° for o secondIndex especifica que ele é menor que index, assim ele percorre por todos os index. é ele quem vai trocar o maior pelo menor
      if (numbers[index] < numbers[secondIndex]) {                      // nossa condição if, se o numbers[index] for menor que o number[secondIndex] ele executará a seguinte ação
        let position = numbers[index];                                  // cria a variável position, para armazenar os numbers[index]
            numbers[index] = numbers[secondIndex];                      // numbers[index] recebe numbers[secondIndex]
            numbers[secondIndex] = position;                            // agora numbers[secondIndex] recebe as posições que ja estão invertidas
      }
    }
  }
console.log(`Ordem crescente ${numbers}`);                              //Ordem crescente 2,3,5,8,9,19,27,35,70,100

//Bônus 2 Ordem decrescente
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];                             // (array-numbers) com numeros variados
for (let index = 0; index < numbers.length; index += 1) {                       // 1° for o index confere o comprimento do array numbers -> 0 1 2 3 4 5 6 7 8 9
    for (let secondIndex = 0; secondIndex < numbers.length; secondIndex += 1) { // 2° for o secondIndex inicia em (0 - no primeiroindice do array) especifica que ele é menor que index, assim ele percorre por todos os index. é ele quem vai trocar o maior pelo menor
        if (numbers[secondIndex] < numbers[secondIndex + 1]) {                  // nossa condição if, se o numbers[secondIndex] for menor que o number[secondIndex + 1] ele executará a seguinte ação
            let position = numbers[secondIndex];                                // cria a variável position, para armazenar os numbers[secondIndex]
                numbers[secondIndex] = numbers[secondIndex + 1];                // numbers[secondIndex] recebe numbers[secondIndex + 1]
                numbers[secondIndex + 1] = position;                            // agora numbers[secondIndex + 1] recebe as posições que ja estão invertidas
        }
    }
}
console.log(`Ordem crescente ${numbers}`);                                      //Ordem crescente 100,70,35,27,19,9,8,5,3,2

// Bônus 3 um novo array a partir do array numbers,igual ao valor correspondente no array + numbers multiplicado pelo seguinte n°. 
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];
for (let index = 1; index < numbers.length; index += 1) { 
    for (let indexDois = index - 1; indexDois < index; indexDois += 1) { 
        newArray.push(numbers[indexDois] * numbers[index]); 
    } 
    if (index === numbers.length - 1) { 
        newArray.push(numbers[index] * 2); 
    }
}
console.log(numbers); //[5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
console.log(newArray); //[45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]
