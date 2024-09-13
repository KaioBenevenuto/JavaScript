//O objeto "Date" é uma função construtora
//Uma função construtora sempre vai ter um "new" antecedendo ela, além de começar sempre com uma letra maiúscula

//const tresHoras = 60 * 60 * 3 * 1000;
//60 * 60 = 1h * 3 = 3h, "* 1000" porque o objeto 'Date' cálcula a data por milissegundos

//const data = new Date(0 + tresHoras);// 01/01/1970 Timestamp unix ou epoca unix


//const data = new Date(2024, 2, 25, 12, 30, 15, 999); //mês 2 = março no JS porque 0 = janeiro
//                      ano  dia mês h   min seg ms


// const data = new Date('2024-03-25 12:30:15.999')
// console.log('Data:', data.getDate())
// console.log("Mês:", data.getMonth() + 1) //Mês começa do 0
// console.log("Ano:", data.getFullYear())
// console.log("h:", data.getHours())
// console.log("min:", data.getMinutes())
// console.log("seg:", data.getSeconds())
// console.log("ms:", data.getMilliseconds())
// console.log("Dia da semana:", data.getDay()) //0 - Domingo e 6 - Sabado


const data = new Date(1707857053202)
console.log(Date.now()) //Saída = 1707857053202, conta desde o Timestamp unix até agora em milissegundos


console.log(data.toString())
//MDN "Date": https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date