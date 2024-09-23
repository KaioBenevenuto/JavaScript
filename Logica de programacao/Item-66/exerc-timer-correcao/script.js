function relogio() {
  const timer = document.querySelector(".timer")
  let segundos = 0
  let relogio

  //Caso tenha muitos botões para gerenciar, use o 'classList.contains' para não ficar chamando um por um
  document.addEventListener("click", function (e) {
    const elemento = e.target

    if (elemento.classList.contains("inicia")) {
      timer.classList.remove("pausado")
      clearInterval(relogio)
      iniciaTimer()
    }

    if (elemento.classList.contains("pausa")) {
      clearInterval(relogio)
      timer.classList.add("pausado")
    }

    if (elemento.classList.contains("zera")) {
      timer.classList.remove("pausado")
      clearInterval(relogio)
      timer.innerHTML = "00:00:00"
      segundos = 0
    }
  })

  function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "UTC",
    })
  }

  function iniciaTimer() {
    relogio = setInterval(function () {
      segundos++
      timer.innerHTML = criaHoraDosSegundos(segundos)
    }, 1000)
  }
}
relogio()
