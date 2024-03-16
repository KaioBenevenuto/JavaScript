// Escrteva uma função que receba um número e retornne o seguinte:
// número é divisível por 3 = FIZZ 
// número é divisível por 5 = BUZZ 
// número é divisível por 3 e 5 = FIZZBUZZ
// número NÃO é divisível por 3 e 5 = retorne o próprio número
// checar se o número é realmente um número = retorne o próprio número
// use a função com números de 0 a 100

function fizzBuzz(num){
  if (typeof(num) !== "number") return num

  if (num % 3 === 0 && num % 5 === 0) return `FIZZBUZZ`
  if (num % 3 === 0) return `FIZZ`
  if (num % 5 === 0) return `BUZZ`
  return num
}

console.log('a', fizzBuzz('a'))
for(let i = 0; i <= 100; i++){
  console.log(i, fizzBuzz(i))
}