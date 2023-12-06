console.log("--------------- Dados imutáveis ---------------")
//Valores primitivos (imutáveis) - string, number, boolean, undefined, null, ( bigint, symbol).
let nome = "Mario";

//      0123
nome = "Luiz"; //Aqui eu não estou mudando o valor original da String, e sim, trocando os valores
nome[0] = "R"; //Se a saída fosse 'Ruiz', então aí sim o valor teria sido modificado
console.log(nome); //Saída = Luiz


let a = "A";
let b = a;//'b' é cópia de 'a', sendo uma cópia ele não depende de 'a' a não ser para pegar o seu valor na primeira vez
console.log(a, b); //Saída = A A
a = "Outra coisa";
console.log(a, b); //Saída = Outra coisa A

console.log("--------------- Dados mutáveis ---------------")
//Valores passado por referência (mutáveis) - array, object, function

//Demonstração com array
let a2 = [1, 2, 3];
let b2 = a2;//Nesse caso está fazendo com que 'b2' aponte para o mesmo local da memória que 'a2', logo não é um cópia
let c2 = b2;//Assim tenho mais uma váriavel apontanto exatamente para o mesmo local
console.log(a2, b2);//Saída = [ 1, 2, 3 ] [ 1, 2, 3 ]

a2.push(4);
console.log(a2, b2);//Saída = [ 1, 2, 3, 4 ] [ 1, 2, 3, 4 ]

b2.pop();
console.log(a2, b2);//Saída = [ 1, 2, 3 ] [ 1, 2, 3 ]

a2.push('Luiz')
console.log(c2)//Saída = [ 1, 2, 3, 'Luiz' ]


console.log()
let a3 = [1, 2, 3];
let b3 = [...a3];//Fazendo dessa forma 'b3' se torna cópia de 'a3', nesse caso ele é independente de 'a3'
let c3 = b3;//Enquanto 'c3', ainda é dependente de 'b3'
console.log(a3, b3);//Saída = [ 1, 2, 3 ] [ 1, 2, 3 ]

a3.push(4);
console.log(a3, b3);//Saída = [ 1, 2, 3, 4 ] [ 1, 2, 3 ]

b3.pop();
console.log(a3, b3);//Saída = [ 1, 2, 3, 4 ] [ 1, 2 ]

a3.push('Luiz')
console.log(c3)//Saída = [ 1, 2 ]


//Demonstração com object
console.log()
const a4 = {
  nome: "Louis",
  sobrenome: "Beaumont"
}
b4 = a4;//Aqui o valor de 'b4' é dependente de 'a4'
console.log(b4);//Saída = { nome: 'Louis', sobrenome: 'Beaumont' }

a4.nome = 'João';
console.log(b4);//Saída = { nome: 'João', sobrenome: 'Beaumont' }


console.log()
const a5 = {
  nome: "Louis",
  sobrenome: "Beaumont"
}
b5 = {...a5};//Fazendo assim o valor de 'b5' é totalmente independente de 'a5'
console.log(b5);//Saída = { nome: 'Louis', sobrenome: 'Beaumont' }

a5.nome = "João";
console.log(b5);//Saída = { nome: 'Louis', sobrenome: 'Beaumont' }