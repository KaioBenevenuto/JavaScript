const timer = document.querySelector(".timer")
let timeOut

document.getElementById("inicia").addEventListener("click", iniciarTimer)

//Inicia o timer 
function iniciarTimer() {
  let h = 0
  let min = 0
  let seg = 0

  if (timer.textContent === "00:00:00") {
    timeOut = setInterval(function () {
      seg++

      if (seg === 60) {
        seg = 0
        min++
      }

      if (min === 60) {
        min = 0
        h++
      }

      if (h === 24) {
        stop(timeOut)
      }
  
      let hFormatted = h.toString().padStart(2, "0")
      let minFormatted = min.toString().padStart(2, "0")
      let segFormatted = seg.toString().padStart(2, "0")

      timer.textContent = `${hFormatted}:${minFormatted}:${segFormatted}`  
    }, 1000)
  }
}
document.getElementById("pausa").addEventListener("click", function () {
  pausarTimer(timeOut)
})
document.getElementById("zera").addEventListener("click", function () {
  zerarTimer(timeOut)
})
//Para o timer
function stop(timeOut) {
  clearInterval(timeOut)
}
//Zera o timer
function zerarTimer(timeOut){
  stop(timeOut)
  timer.textContent = "00:00:00"
}
//Para o timer 'oficialmente'
function pausarTimer(timeOut) {
  stop(timeOut);
  timer.style.color = 'red';
  console.log('oi')
}
