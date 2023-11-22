let umaString = 'um "texto"'; //"Um \"texto\"" - Dá pra fazer dessa forma também mas não é recomendado
console.log(umaString)

//As strings são indexadas ou seja cada caractere tem um índice
//                01234567
let umaString2 = "Um texto"
console.log(umaString2[4])//Saída = e
console.log(umaString2.charAt(1))//Saída = m

console.log(umaString2.concat(" em um lindo dia.")) //concat - concatena
console.log(umaString2 + " em um lindo dia.")
console.log(`${umaString2} em um lindo dia.`)

console.log(umaString2.indexOf("texto")) //Mostra o índice da primeira letra da palavra encontrada na string. Saída = 3
console.log(umaString2.indexOf("o", "3")) //Nesse caso vai mostrar o índice da letra 'o' depois do índice 3. Saída= 7
console.log(umaString2.lastIndexOf("m", "3")) //O 'lastIndexOf' procura o índice de trás para frente. Saída = 1

console.log(umaString2.match(/[a-z]/g)) //Retorna todas as letras minúsculas da string. Faz uso de expressões regulares

console.log(umaString2.search(/x/)) //Retorna o índice do que é pedido. Também aceita expressões regulares

console.log(umaString2.replace("Um", "Outro")) //Substitui uma parte da string por outra
console.log(umaString2.replace(/Um/, "Dois")) //Pode ou não usar expressões regulares
console.log(umaString2.replace(/t/g, "#"))

console.log(umaString2.length) //length - mostra a quantidade de caracteres que a string tem

console.log(umaString2.slice(3, 7));//slice - corta uma parte da string. Saída = text
//Para fazer isso coloque o índice de onde quer que comece e onde quer que termine de cortar
console.log(umaString2.slice(3, 8));//O índice de onde quer que termine tem que ser um a mais. Saída = texto
console.log(umaString2.slice(-4));//saída = exto(Um t 'exto')
console.log(umaString2.slice(-4, -1));// saída = ext(Um t 'ext' o)

console.log(umaString2.substring(umaString2.length - 4, umaString2.length -1));
//substring - faz a mesma coisa que o 'slice', só que dá mais trabalho

console.log(umaString2.split(' '));//split - dividi a string de acordo com a caractere dada
console.log(umaString2.split("t"));
console.log(umaString2.split("t", 2));//É possível também decidir a quantidade de resultados que quer receber

console.log(umaString2.toUpperCase());//toUpperCase() - faz todas as letras ficarem maiúsculas
console.log(umaString2.toLowerCase())//toLowerCase() - faz todas as letras ficarem minúsculas

/**Para buscar mais informações acesse os links abaixo:
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript
 * https://www.w3schools.com/js/
 */