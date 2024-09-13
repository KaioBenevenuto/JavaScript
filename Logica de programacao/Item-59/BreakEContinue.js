// Obs: O "Break" e "Continue" funcionam em qualquer sistema de repetição(while, do while, for, ...)

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for(let i of numeros){
  if(i === 5){
    continue
  }
  // "Continue" fica sempre antes do código para que ele não seja execultado em determinado índice do array

  console.log(i)

  if(i === 7){
    break
  }
  // O "Break" deve ficar depois do código para que o ultimo valor, se desejado, apareça
}

// continue - continua na próxima interação
// break - sai do laço