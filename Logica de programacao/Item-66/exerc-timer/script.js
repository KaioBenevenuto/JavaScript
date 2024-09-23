const timer = document.querySelector(".timer")
let timeOut
let key = true
let securityKey = true
let h = 0
let min = 0
let seg = 0

document.getElementById("inicia").addEventListener("click", iniciarTimer)
document.getElementById("pausa").addEventListener("click", pausarTimer)
document.getElementById("zera").addEventListener("click", zerarTimer)

//timer
function cronometro(){
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
//Inicia o timer 
function iniciarTimer() {
  if (timer.textContent === "00:00:00" && securityKey) {
    h = 0
    min = 0
    seg = 0
    cronometro()
  }
}
//Para o timer
function stop(timeOut) {
  clearInterval(timeOut)
}
//Zera o timer
function zerarTimer(){
  if(securityKey){
    h = 0
    min = 0
    seg = 0
    stop(timeOut)
    timer.textContent = "00:00:00"
  }
}
//Para o timer 'oficialmente'
function pausarTimer() {
  if(timer.textContent !== '00:00:00'){
    if (key) {
      stop(timeOut)
      timer.style.color = "crimson"
      key = false
      securityKey = false
    } else{
      cronometro()
      timer.style.color = "black"
      key = true
      securityKey = true
    }         
  }
}
