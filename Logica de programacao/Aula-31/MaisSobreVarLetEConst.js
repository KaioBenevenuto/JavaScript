// let tem escopo de bloco { ... bloco}
// var só tem escopo de função 

let nome = 'Luiz' // criando
var nome2 = 'Luiz' // criando

if(true){
  let nome = "Otávio" // criando
  var nome2 = 'Otávio' // redeclarando
}

console.log(nome, nome2)


//O var eleva a declaração da variável para o topo da página, fazemdo com que mesmo se ela for usada antes de ser declarada, mostre como se apenas o seu valor não tivesse sido definido

// console.log(sobrenome) // erro
// let sobrenome = "Miranda"
console.log(sobrenome2) // undefined
var sobrenome2 = 'Miranda'