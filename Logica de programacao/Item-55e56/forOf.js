const nome = "Luiz Otávio"

// for(let i = 0; i < nome.length; i++){
//   console.log(nome[i])
// }
//Obs: for clássico -> geralmente com iteráveis (arrays ou strings)

// for(let i in nome){
//   console.log(nome[i])
// }
//Obs: For in -> retorna o índice ou chave (arrays, strings ou objetos)

for (let valor of nome){
  console.log(valor)
}
//Obs: For of - retorna o valor em si (arrays, strings)

// const n = ['L','u','i','z']
// n.forEach(function(valor, indice, array){
//   console.log(valor, indice, array)
// }) 
//Obs: forEach -> só funciona com array