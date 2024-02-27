// O 'for' é uma estrutura de repetição

// i = index
for(let i = 0; i < 6; i++){
  console.log(`Linha ${i}`)
}
console.log()
for (let i = 0; i < 11; i++) {
  const par = i % 2 === 0 ? `O número ${i} é par` : `O número ${i} é impar`
  console.log(par)
}
console.log()
//                0       1       2       3          4        5
const frutas = ["Maça", 'Pêra', "Uva", "Banana", "Abacate", "Kiwi"];
for (let i = 0; i < frutas.length; i++) {
  console.log(`Índice ${i} ->`,frutas[i])
}