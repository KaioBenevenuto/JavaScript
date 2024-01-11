/*
  Operadores de comparação

  >      maior que
  >=     maior ou igual a
  <      menor que
  <=     menor ou igual a
  ==     igualdade (só checa "valor") **********Não é recomendado usar esse
  ===    igualdade extrita (checa "valor" e "tipo")        
  !=     diferença (só checa "valor") **********Não é recomendado usar esse
  !==    diferença extrita (checa "valor" e "tipo")
*/


// >
console.log(">")
console.log(`10 > 5 - ${10 > 5}`) //true

console.log("")
// >=
console.log(">=")
console.log(`10 >= 5 - ${10 >= 5}`) //true
console.log(`5 >= 5 - ${5 >= 5}`) //true

console.log("")
// <
console.log("<")
console.log(`10 < 5 - ${10 < 5}`) //false

console.log("")
// <=
console.log("<=")
console.log(`10 <= 5 - ${10 <= 5}`) //false
console.log(`5 <= 5) - ${5 <= 5}`) //true

console.log("")
// ==
console.log("==")
console.log(`5 == 5 - ${5 == 5}`) //true
console.log(`5 == '5' - ${5 == '5'}`) //true

console.log("")
// ===
console.log("===")
console.log(`5 === 5 - ${5 === 5}`) //true
console.log(`5 === '5' - ${5 === '5'}`) //false

console.log("")
// !=
console.log("!=")
console.log(`10 != 5 - ${10 != 5}`) //true
console.log(`10 != '10' - ${10 != "10"}`) //false

console.log("")
// !==
console.log("!==")
console.log(`10 !== 5 - ${10 !== 5}`) //true
console.log(`10 !== '10' - ${10 !== "10"}`) //true