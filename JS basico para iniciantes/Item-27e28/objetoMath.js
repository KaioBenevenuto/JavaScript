//Math - é um objeto do JS que tem a função de efetuar operações matemáticas

/*
  Métodos do 'Math' usados para arredondar

  let num1 = 9.54921;
  //let num2 = Math.floor(num1); //Math.floor() - arredonda o número para baixo
  //let num3 = Math.ceil(num1); //Math.ceil() - arredonda o número para cima
  //let num4 = Math.round(num1); //Math.round() - arredonda para o número mais próximo
  console.log(num4);
*/

/*
  Métodos do 'Math' que retorna o maior ou menor valor

  console.log(Math.max(1,2,50,-50,-100)); //Math.max() - retorna o maior número / Saída = 50
  console.log(Math.min(1,2,50,-50,-100)); //Math.min() - retorna o menor número / Saída = -100
*/

/*
  Método do 'Math' que retorna um valor randomico

  console.log(Math.random()); //Math.random() - retorna um número aleatório entre 0 e 1
  const aleatorio = Math.round(Math.random() * (10 - 5) + 5); //retorna um número aleatório entre 10 e 5
  console.log(aleatorio);
*/

console.log(Math.PI);//Math.PI - retorna o valor de PI

console.log(Math.pow(10, 2));//Math.pow() - retorna o primeiro número elevado ao segundo
console.log(10 ** 2)

console.log(9 ** (1/2)) //Dessa forma é possível calcular a raiz quadrada de um número. Saída = 3
console.log(9 ** 0.5)

console.log(10 / 0); //Normalmente quando um número é dividido por 0 da erro, mas o JS retorna que é Infinity
console.log(!!(10 / 0)); //Obs.: Quando se trata de booleanos o valor 'Infinity' é conciderado como 'true'