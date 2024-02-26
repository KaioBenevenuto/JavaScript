const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
  endereco: {
    rua: 'Av Brasil',
    numero: 320
  }
};

// Atribuição via desestruturação(objetos)
const {nome = 'Valor padrão', sobrenome: sn, endereco:{rua}} = pessoa;
//'sobrenome:' cria a chave 'sn' que tem o valor de sobrenome(Miranda)
console.log(nome, sn, rua)

//O operador '...rest' também pode ser utilizado aqui