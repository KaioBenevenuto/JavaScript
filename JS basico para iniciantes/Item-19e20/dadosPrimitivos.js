//Strings -> dados em formato de textos
const nome = 'Lucas';
const nome1 = "Lucas";
const nome2 = `Lucas`;

//Number -> dados em formato números
const num = 1;
const num1 = 1.5;

//Undefined -> dados indefinidos, não aponta para lugar nenhum
let nomeAluno;

//Null -> sem dados, não aponta para lugar nenhum
const sobrenomeAluno = null;

//Boolean -> só aceita dois valores, true ou false (lógico)
const aprovado = true;

console.log(`${nome} - ${typeof(nome)}`);
console.log(`${num} - ${typeof num}`);
console.log(`${nomeAluno} - ${typeof nomeAluno}`);
console.log(`${sobrenomeAluno} - ${typeof sobrenomeAluno} - Aqui ocorre um erro no JS. Null não é um objeto`);
console.log(`${aprovado} - ${typeof aprovado}`);

//Além desses, ainda hà outro dado primitivo(symbol) que será tratado mais a frente