const pessoa1 = {
  nome: 'Lauren', //'nome' é um atributo do objeto 'pessoa1'
  sobrenome: 'Fonseca',//Todos os atributos devem ser separados por uma ','
  idade: 18
};
const pessoa2 = {
  nome: "Lucas",
  sobrenome: "Oliveira",
  idade: 38,
};

console.log(`${pessoa1.nome} ${pessoa1.sobrenome} tem ${pessoa1.idade} anos.`);
console.log(`${pessoa2.nome} ${pessoa2.sobrenome} tem ${pessoa2.idade} anos.`);


//Para automatizar a criação dos objetos usa-se funções, essas funções são chamadas de 'Factory'
function criaPessoas(nome, sobrenome, idade){
  return { nome, sobrenome, idade } //O JS interpreta que o parâmetro deve atribuir seu valor ao atributo com o mesmo nome
}

const pessoa3 = criaPessoas('Maria', 'Clara', 19);
const pessoa4 = criaPessoas("Mario", "Lombardi", 32);
const pessoa5 = criaPessoas("Fulano", "Fonseca", 28);
console.log(`${pessoa3.nome} ${pessoa3.sobrenome} tem ${pessoa3.idade} anos.`);
console.log(`${pessoa4.nome} ${pessoa4.sobrenome} tem ${pessoa4.idade} anos.`);
console.log(`${pessoa5.nome} ${pessoa5.sobrenome} tem ${pessoa5.idade} anos.`);


//Um objeto pode ter uma função, em casos assim ela passa a ser chamada de 'método'
const pessoa6 = {
  nome: "Joana",
  sobrenome: "Oliveira",
  idade: "24",
  fala() {
    console.log(
      `Olá! meu nome é ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos`
    )
  }, 
  //Nesse contexto o 'this' representa o objeto 'pessoa6'
  incrementaIdade(){
    this.idade++;
  }
}

pessoa6.fala();
pessoa6.incrementaIdade();
pessoa6.fala();