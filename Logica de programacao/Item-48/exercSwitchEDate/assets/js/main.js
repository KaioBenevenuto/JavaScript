function meuEscopo(){
  const data = new Date();
  const h1 = document.querySelector(".container h1")

  function getData(data){
    return `${data.getDate()} de ${getMes(data)} de ${data.getFullYear()}`
  }

  function getMes(data){
    switch (data.getMonth()) {
      case 0:
        return `Janeiro`
      case 1:
        return `Fevereiro`
      case 2:
        return `Março`
      case 3:
        return `Abril`
      case 4:
        return `Maio`
      case 5:
        return `Junho`
      case 6:
        return `Julho`
      case 7:
        return `Agosto`
      case 8:
        return `Stembro`
      case 9:
        return `Outubro`
      case 10:
        return `Novembro`
      case 11:
        return `Dezembro`
    }
  }

  function getDiaSemana(data){
    switch (data.getDay()) {
      case 0:
        return `domingo`
      case 1:
        return `segunda-feira`
      case 2:
        return `terça-feira`
      case 3:
        return `quarta-feira`
      case 4:
        return `quinta-feira`
      case 5:
        return `sexta-feira`
      case 6:
        return `sábado`
    }
  }

  function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
  }

  function getHoras(data){
    return `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
  }

  h1.innerHTML = `${getDiaSemana(data)}, ${getData(data)} <br> ${getHoras(data)}`
}
meuEscopo()