/*
//Array - É uma lista de dados que pode ser armazendas em uma única váriavel.
//Para criar um array é preciso definir os valores da váriavel dentro de um '[]', e separar cada valor com uma ','

const nomes = ['Felipe', 'Maria', 'João', 'Daniela'];
console.log(nomes);

//Obs.: Não é uma boa prática de programação colocar mais de um tipo(Number, String...) de valor dentro de um array
*/


//A idexação de um array é diferente do de uma String, independente do tipo de valor armazenado
//            01234
const nome = 'Carla';
console.log(nome[0])
//            0         1        2  
let nomes = ["Felipe", "Maria", "João"];
console.log(nomes[0][1])//O 1° '[]' seleciona o elemento do array e o 2° seleciona o índice da String. Saída = e
console.log(nomes[2])//Saída = João


//Para mudar o valor de um elemento dentro de um array, chamamos o seu índice:
nomes[1] = 'Laura';
console.log(nomes);//Saída: [ 'Felipe', 'Laura', 'João' ]


//Para adicionar um elemento no final do array, usamos o 'length'
//nomes[nomes.length] = 'Luiza';
//nomes[nomes.length] = "Jhonas";
//Ou a função 'push'
nomes.push("Luiza")
nomes.push("Jhonas")
console.log(nomes);//Saída = [ 'Felipe', 'Laura', 'João', 'Luiza', 'Jhonas' ]

//Para adicionar um elemento no começo ao invés do final , usamos a função 'unshift':
nomes.unshift("Mario");
console.log(nomes);//Saída = [ 'Mario', 'Felipe', 'Laura', 'João', 'Luiza', 'Jhonas' ]
//Obs.: Se colocar essa função em um 'console.log()' ela mostra a quantidade de elementos dentro do array

//Para apagarmos o último elemento do array, usamos a função 'pop':
nomes.pop();
console.log(nomes);//Saída = [ 'Mario', 'Felipe', 'Laura', 'João', 'Luiza' ]
const removido = nomes.pop();//Com ela também é possível armazenar o elemento removido
console.log(removido);//Saída = Luiza
console.log(nomes);//Saída = [ 'Mario', 'Felipe', 'Laura', 'João' ]

//Para apagarmos o primeiro elemento do array, usamos a função 'shift':
const removido1 = nomes.shift();
console.log(removido1);//Saída = Mario
console.log(nomes);//Saída = [ 'Felipe', 'Laura', 'João' ]

/*
Obs.: Toda mudança, seja para adicionar ou retirar um elemento do array modifica a posição do índice. 
Por exemplo a forma em que a váriavel 'nomes' está agora é:
   0         1        2
[ 'Felipe', 'Laura', 'João' ]

antes da última modificação estava:
   0        1         2        3
[ 'Mario', 'Felipe', 'Laura', 'João' ]
*/

//Para apagar um elemento sem modificar a posição dos índices, usamos o 'delete':
delete nomes[1];
console.log(nomes);//Saída = [ 'Felipe', <1 empty item>, 'João' ]. Onde o elemento foi apagado ficará com um espaço vazio


//Quando você seleciona uma elemento de um array que não foi definido ou está vazio, retorna um 'undefined':
console.log(nomes[100]);//Saída = undefined
console.log(nomes[1]);//Saída = undefined


//Para fatiar um array usamos o 'slice'. Da mesma forma que foi utilizado nas anotações de 'String'
nomes.push("Ludi");
nomes.push("Ana");
//    0         1               2       3       4
// [ 'Felipe', <1 empty item>, 'João', 'Ludi', 'Ana' ]
console.log(nomes.slice(0, 4));//Novamente, o índice decidido para fechar o corte não vai aparecer
console.log(nomes.slice(0, -3))


//Um array é um objeto Indexado
console.log(typeof nomes);
//Então para saber se esse objeto é realmente um array, usamos o 'instanceof Array':
console.log(nomes instanceof Array);
