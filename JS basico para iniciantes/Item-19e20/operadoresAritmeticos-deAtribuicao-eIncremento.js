//Operadores Aritméticos

// '+' -> concatena quando é usado em valores do tipo strings
const nome1 = 'Ber';
const nome2 = 'nado';
console.log(nome1 + nome2); //saída = Bernado

console.log("--------------- + - / * ** % ---------------")
// '+' -> soma quando é usado em valores do tipo number
const num1 = 5;
const num2 = 3;
console.log(num1 + num2); //saída = 8

// '-' -> subtrai
console.log(num1 - num2);// saída = 2

// '/' -> dividi
console.log(num1 / num2);// saída = 1.6

// '*' -> multiplica
console.log(num1 * num2);// saída = 15

// '**' -> potenciação
console.log(num1 ** num2);// saída = 125

// '%' -> retorna o resto da divisão
console.log(num1 % num2);// saída = 2

/**
 * A ordem de precedência em que cada operador aritmético é execultado é:
 * '()'
 * '**'
 * '*', '/', '%'
 * '+', '-'
 */

console.log("----- Operadores de incrementação (++) -----")
// '++' -> é utilizado para fazer com que um número receba o seu proprio valor mais 1
let contador = 1;
contador++;//2
contador++;//3
console.log(contador);//saída = 3

console.log("------------------- pós++ ------------------")
// 'contador++' pós fixado -> primeiro executa a ação pedida e depois incrementa o valor
console.log(contador++);//saída = 3 / ele primeiro foi execultado pela função console.log() e depos incrementou o valor
console.log(contador);//saída = 4

console.log("----------------- ++pré --------------------")
// '++contador' pré fixado -> faz a conta primeiro e depois retorna o valor
console.log(++contador);//saída = 5

/**
 * Operadores de incremento -> '++'
 * Operadores de decremento -> '--'(funciona da mesma forma que os Operadores de incremento mas subtraindo)
 */

console.log("--------- Operadores de atribuição ---------")
//Operadores de atribuição
let contador2 = 0;
contador2 += 10;//contador2 = contador2 + 10 -> isso serve para qualquer opreador aritmético('-=', '*=', '/=', ...)
console.log(contador2);
contador2 += 10
console.log(contador2)
contador2 += 10
console.log(contador2)
contador2 += 10
console.log(contador2)
contador2 += 10
console.log(contador2)

console.log("---------------- Conversões ----------------")
/*'
parseInt' - converte para um n° inteiro -> Não funciona mais
console.log(5 + '5');
console.log(5 + parsetInt("5"));

'parseFloat' - converte para um n° real -> Não funciona mais
console.log(5 + "5.5")
console.log(5 + parsetFloat("5.5"));
*/

//'Number' - converte uma string para um número -> Funciona
console.log(5 + "5.5")
console.log(5 + Number("5.5"));

console.log(10 ** Number('2'));
