//↓ O 'prompt' pede um número ao cliente mas ele vem no formato de 'string', então o 'Number' converte ele para um número
const numero = Number(prompt("Digite um número:")); 

//↓ Faz com que o 'numeroTitulo' receba o elemento que tem o id = 'numero-titulo'
const numeroTitulo = document.getElementById('numero-titulo'); 
const texto = document.getElementById("texto");


numeroTitulo.innerHTML = numero; //Muda o valor dentro do elemento que está no 'numeroTitulo' para o valor de 'numero'
texto.innerHTML = `<p> A raiz quadrada desse número é: ${numero ** 0.5}`;
texto.innerHTML += `${numero} é inteiro? ${Number.isInteger(numero)}`;
texto.innerHTML += `<p>Ele é um NaN? ${Number.isNaN(numero)}`;
texto.innerHTML += `<p>Arredonadando para baixo: ${Math.floor(numero)}`;
texto.innerHTML += `<p>Arredonadando para cima: ${Math.ceil(numero)}`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}`;