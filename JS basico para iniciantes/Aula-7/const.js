/*
  - Não é possível re-declarar uma constante
  - Não podemos criar constantes com palavras reservadas
  - Constantes precisam ter nomes significativos  
  - Não podemos começar o nome de uma constante com núnero
  - Os nomes das constantes não podem conter espaço ou traços, para não ficar confuso usamos o 'camelCase'
  - As constantes são 'Case-sensitive'. Significa que, por exemplo, a constante 'folha' é diferente da constante 'Folha'
  - NÃO UTILIZE 'var', UTILIZE 'const'
  - Não é possível declarar uma constante sem inicializa-la
  - O valor de uma constante não pode ser alterada
*/
const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
console.log(resultado)

//'typeof' é uma função que mostra o tipo da váriavel
const numero = 1;
const texto = '10';
console.log(typeof numero)

