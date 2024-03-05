// "For in" -> lê os índices ou chaves do objeto
const frutas = ["Banana", "Maça", "Uva"]

// for(let i=0; i < frutas.length; i++){
//   console.log(frutas[i])
// }

for(let indices in frutas){
  console.log(frutas[indices])
}

const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otávio',
  idade: 30
}

console.log()
console.log(pessoa.nome)
console.log(pessoa['nome'])
console.log()

for(let chave in pessoa){
  console.log(chave, pessoa[chave])
}