// O 'while' é quase igual ao 'for', mas normalmente é usado quando não sabemos quando a estrutura de repetição irá terminar
function random(min, max){
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}
const min = 1;
const max = 50; 
let rand = random(min, max);

while(rand !== 10){
  rand = random(min, max)
  console.log(rand)
}

// O 'do while' primeiro executa o código e depois checa a condição
do{
  rand = random(min, max)
  if(rand > 10){
    console.log(rand,"é maior que 10")
  } else if(rand < 10){
    console.log(rand,"é menor que 10")
  } else{
    console.log(rand, "é igual que 10")
  }
}while( rand > 10);
