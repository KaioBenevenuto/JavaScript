// (condição) ? "Valor para verdadeiro" : "Valor para falso" -> Funciona como se fosse um "if / else" simples

const pontuacaoUsuario = 1000;

/*
 if (pontuacaoUsuario >= 1000){
   console.log("Usuário VIP")
 } else{
   console.log("Usuário normal")
 } 
*/

const nivelUsuario = (pontuacaoUsuario >= 1000) ? "Usuário VIP" : "Usuário normal";
console.log(nivelUsuario);


// Algo semelhante pode ser feito com o operador lógico '||'
const corUsuario = null;
const corPadrao = corUsuario || "Preta";

console.log(corPadrao);