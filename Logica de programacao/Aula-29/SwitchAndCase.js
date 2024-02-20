const data = new Date();
const diaSemana = data.getDay();
// let diaSemanaTexto;

// if(diaSemana === 0){
//   diaSemanaTexto = `Domingo`
// } else if (diaSemana === 1){
//   diaSemanaTexto = `Segunda`
// } else if (diaSemana === 2){
//   diaSemanaTexto = `Terça`
// } else if (diaSemana === 3){
//   diaSemanaTexto = `Quarta`
// } else if (diaSemana === 4){
//   diaSemanaTexto = `Quinta`
// } else if (diaSemana === 5){
//   diaSemanaTexto = `Sexta`
// } else if (diaSemana === 6){
//   diaSemanaTexto = `Sábado`
// }
//   else {
//   diaSemanaTexto = ``
// } 


// switch (diaSemana) {
//   case 0:
//     diaSemanaTexto = `Domingo`
//     break //"break" - Faz com que assim que entrar em um 'case' saia do 'switch'
//   case 1:
//     diaSemanaTexto = `Segunda`
//     break
//   case 2:
//     diaSemanaTexto = `Terça`
//     break
//   case 3:
//     diaSemanaTexto = `Quarta`
//     break
//   case 4:
//     diaSemanaTexto = `Quinta`
//     break
//   case 5:
//     diaSemanaTexto = `Sexta`
//     break
//   case 6:
//     diaSemanaTexto = `Sábado`
//     break
//   default: //"default" - É o valor padrão, tem a mesma funcionalidade que o 'else' tem no 'if'
//     diaSemanaTexto = ``
// }

//Obs.: Para comentar várias linhas de uma vez(pelo menos no meu VSCode) Ctrl + ;

function getDiaSemanaTexto(diaSemana){
  let diaSemanaTexto;
  switch (diaSemana) {
    case 0:
      return diaSemanaTexto = `Domingo`
    case 1:
      return diaSemanaTexto = `Segunda`
    case 2:
      return diaSemanaTexto = `Terça`
    case 3:
      return diaSemanaTexto = `Quarta`
    case 4:
      return diaSemanaTexto = `Quinta`
    case 5:
      return diaSemanaTexto = `Sexta`
    case 6:
      return diaSemanaTexto = `Sábado`
    default:
      return diaSemanaTexto = ``
  }
}

console.log(diaSemana, getDiaSemanaTexto(diaSemana));