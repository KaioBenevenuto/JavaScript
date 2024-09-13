/*
  Saída:
  
  Kaio Benevenuto Hoffman tem 19 anos, pesa 76 kg
  tem 1.82 de altura e seu IMC é de 22.944088878154812
  Kaio nasceu em 2004.
*/
const nome = 'Kaio';
const sobreNome = 'Benevenuto Hoffman';
const idade = 19;
const peso = 76;
const alturaEmM = 1.82;
let indiceMassaCorporal; //peso / (altura * altura)
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2023 - idade

//A ',' separa
console.log(nome, sobreNome, 'tem', idade, 'anos, pesa', peso, 'kg');
//Template strings: `` faz com que toda a frase vire uma string, e o ${} tira o que está dentro dele dessa string
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
//O '+' concatena
console.log(nome + ' nasceu em ' + anoNascimento + '.');