// Atribuição via desestruturação(array) - quando atribui valores a mais de uma váriavel utilizando um array

// Índices:       0    1    2    3    4    5    6    7    8
const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const [um, dois, tres, ...resto] = numeros // "...resto" - O nome dado a váriavel é auto-explicativo

// ...rest - usado no sentido pegar o resto de alguma coisa
// ...spread - usado no sentido de espalhar/distribuir alguma coisa
// 'rest' e 'spread' são exatamente o mesmo operador(...), só é usado de forma diferente deacordo com o cotexto 

const [ , , , , cinco, , sete] = numeros // Também é possível pegar valores específicos dessa forma

console.log(um, dois, tres,)
console.log(resto)
console.log(cinco, sete)

console.log()
//                    0          1          2
//                 0  1  2    0  1  2    0  1  2
const numeros2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(numeros2[1][2]) // Saída: 6

const [, [, , seis]] = numeros2
console.log(seis);

const [lista1, lista2, lista3] = numeros2
console.log(lista3[2])