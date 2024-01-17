//Assim que é encontrado um trecho do código que é verdadeiro, esse trecho é execultado e logo em seguida sai do bloco if

const numero = 7;

if (numero >= 0 && numero <= 2){
  console.log("O número está entre 0 e 2")
}else if(numero >= 3 && numero <= 5){
  console.log("O número está entre 3 e 5")
}else if(1===1){ //verdadeiro
  console.log("ERRO!")
}else if (numero >= 6 && numero <= 8) { //verdadeiro
  console.log("O número está entre 6 e 8")
} else {
  console.log("O número NÃO está entre 0 e 8")
}

console.log("Resto do código.......")