document.getElementById("inicia").addEventListener("click", iniciarTimer)

function iniciarTimer(){
  const timer = document.querySelector(".timer")

  let h =23
  let min =59
  let seg =50

  const timeOut = setInterval(function () {
    seg++

    if(seg === 60){
      seg = 0
      min++
    }

    if(min === 60){
      min = 0
      h++
    }

    if(h === 24){
      stop(timeOut)
    }

    let hFormatted = h.toString().padStart(2, "0");
    let minFormatted = min.toString().padStart(2, "0");
    let segFormatted = seg.toString().padStart(2, "0");

  timer.textContent = `${hFormatted}:${minFormatted}:${segFormatted}`
}, 1000)
}

function stop(timeOut){
  clearInterval(timeOut)
}