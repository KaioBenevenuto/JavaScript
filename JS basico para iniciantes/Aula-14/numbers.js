/**
  //toString()
   
  let num1 = 10;
  let num2 = 2.5;
  
  console.log(num1.toString() + num2);//A função 'toString()' converte temporariamente um número para string
  console.log(typeof num1);//Saída = number
  
  console.log(num1.toString(2));//Colocando o '2' dentro da função 'toString()', retorna a versão binária do número
  
  num1 = num1.toString();//É possível usa-lo para alterar permanentemente um número para uma string 
  console.log(typeof num1);//Saída = string
 */

 /*
  //toFixed()
  let num3 = 11.2192038229;
 
  console.log(num3.toFixed(2));//A função 'toFixed()' arredonda um número decimal
  console.log(num3.toFixed(4));//colocando um número dentro dela você decide quantas casas irá mostrar depois do '.'
 */

 /*
  //Number.isInteger()
  let num4 = 12;
  console.log(Number.isInteger(num4));//Vai retornar se o número é inteiro ou não. Saída = true
 */

 /*
  //Number.isNaN()
  let num5 = 5;
  num5 = num5 * 'Olá';
  console.log(Number.isNaN(num5));//Essa função retorna se é ou não é um erro NaN
  //NaN.: 'não é um número', esse erro aparece quando tentamos calcular um number com algo que não é um number
 */



/*
  //O padrão que o JS segue para a precisão dos números decimais é o 'IEEE 754-2008'. Esse padrão não é muito preciso

  - Abaixo um meio de contornar essa imprecisão com funções do prório JS

  num6 = 0.7;
  num7 = 0.1;
  num6 += num7;//O resulatdo esperado aqui seria 0.8
  console.log(num6)//Mas fica 0.7999999

  num6 += num7;//0.9, mas por causa da imprecisão fica 0.8999999
  console.log(num6)

  num6 += num7;//1.0, mas por causa da imprecisão fica 0.9999999
  console.log(num6)

  console.log( "--------------- parseFloat(num.toFixed(2)) ou Number(num.toFixed(2)) ---------------")
  //para concertarmos isso usamos a função 'parseFloat(num.toFixed(2))' ou 'Number(num.toFixed(2))'
  
  num6 += num7;//1.1
  num6 += num7;//1.2
  num6 += num7;//1.3
  num6 += num7;//1.4
  num6 += num7;//1.5
  num6 += num7;//1.6
  num6 += num7;//1.7
  num6 += num7;//1.8
  num6 += num7;//1.9
  num6 += num7;//2.0

  num6 = Number(num6.toFixed(2));
  console.log(num6)
  console.log(Number.isInteger(num6));


  - Um outro meio de resolver esse problema seria com cálculos
  
  let num9 = 0.7;
  let num10 = 0.1;

  num9 = ((num9 * 100) + (num10 * 100)) / 100;//0.8
  num9 = ((num9 * 100) + (num10 * 100)) / 100;//0.9
  num9 = ((num9 * 100) + (num10 * 100)) / 100;//1.0

  console.log(num9)
  console.log(Number.isInteger(num9));
 */
