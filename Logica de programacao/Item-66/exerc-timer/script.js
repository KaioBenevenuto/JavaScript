document.getElementById("inicia").addEventListener("click", function () {
  let timer = document.querySelector(".time")
  timer = new Date()
  timer.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  })
  console.log(timer)
})

