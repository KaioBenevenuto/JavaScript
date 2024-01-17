/**
 * if -> se
 * else if -> senão se
 * else -> senão
 * 
 * "if" pode ser usado sozinho
 * sempre que utilizar o "else", precisarei de um "if" antes
 * eu posso ter vários "else if's" na checagem
 * podemos usar condições sem o "else if", usando apenas o "if" e o "else"
 * 
*/

const hora = 119;

if (hora > 0 && hora < 12){
  console.log("Bom dia!")
} else if(hora >= 12 && hora < 18){
  console.log("Boa tarde!")
} else if (hora >= 18 && hora < 24) {
  console.log("Boa noite!")
} else{
  console.log('Olá')
}