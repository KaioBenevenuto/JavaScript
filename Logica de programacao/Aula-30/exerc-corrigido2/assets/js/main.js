function meuEscopo() {
  const data = new Date()
  const h1 = document.querySelector(".container h1")

  function getData(data) {
    return `${data.getDate()} de ${getMes(data.getMonth())} de ${data.getFullYear()}`
  }

  function getMes(data) {
    const meses = [
      "janeiro",
      "fevereiro",
      "março",
      "abril",
      "maio",
      "junho",
      "julho",
      "agosto",
      "setembro",
      "outubro",
      "novembro",
      "dezembro",
    ]
    return meses[data]
  }

  function getDiaSemana(data) {
    const diaS = [
      "domingo",
      "segunda-feira",
      "terça-feira",
      "quarta-feira",
      "quinta-feira",
      "sexta-feira",
      "sábado",
    ]
    return diaS[data]
  }

  function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`
  }

  function getHoras(data) {
    return `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(
      data.getMinutes()
    )}`
  }

  h1.innerHTML = `${getDiaSemana(data.getDay())}, ${getData(data)} <br> ${getHoras(data)}`
}
meuEscopo()
