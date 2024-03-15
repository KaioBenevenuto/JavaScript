// Escreva uma função que receba dois números e retorne o mior dele

// function max(x, y) {
//   if (x > y) return x;
//   if (y > x) return x;
//   return `Os dois números são iguais`;
// }

// function max(x, y){
//   if(x === y) return `Os dois números são iguais`;
//   return (x > y) ? x : y;
// }

const max = (x, y) => {
  if (x === y) return `Os dois números são iguais`;
  return x > y ? x : y;
};

console.log(max(100, 900));