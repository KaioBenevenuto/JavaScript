//Função é um bloco de código que execulta uma ação

function saudacao (nome){
  //'nome' é um parâmetro. Os parâmetros podem receber valores que podem ser utilizados dentro da função
  //console.log(`Bom dia ${nome}!`);
  return `Bom dia ${nome}!`//return - retorna um valor da função
}

//saudacao('Maria');//Aqui estou chamando a função 'saudacao' e passando um parâmetro
//saudacao("Lucas");//Funções são reutilizáveis

const variavel = saudacao('Fulano');//A 'variavel' está recebendo o valor retornado da função
console.log(variavel);


console.log("--------------- Função comum ---------------")
function soma (x = 1, y = 2){
  return x + y;
  //Obs.: Nada abaixo de return será execultado
}

console.log(soma());
console.log(soma(28));
console.log(soma(undefined, 299));//O 'undefined' aqui está dizendo que eu não defini um valor
console.log(soma(1200, 1800));


console.log("--------------- Função anônima ---------------")
const raiz = function (x = 4){
  return x ** 0.5;
};//Normalmente uma função não precisa do ';', mas por se tratar de um função anônima necessita
//Obs.: Uma função é anônima quando ela está sendo atribuída à uma váriavel, nesse caso ela não precisa ser nomeada

console.log(raiz())
console.log(raiz(9))
console.log(raiz(16))


console.log("--------------- Arrow function ---------------")
//O 'arrow function' possui as mesmas características das funções anônimas, porém é mais simplificado
const subtracao = (x = -1, y = 1) => x - y;//Apesar de não ter um 'return' ela está retornando um valor
console.log(subtracao(1000, 8000))