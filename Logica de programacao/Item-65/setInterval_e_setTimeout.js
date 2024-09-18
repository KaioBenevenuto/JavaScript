function mostraHora(data){
  data = new Date()
  return data.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  })
}

const timeOut = setInterval(function(){console.log(mostraHora())}, 500) 
//setInterval - execulta uma função em um determinado intervalo de tempo
//também da para colocar o valor gerado desse intervalo em uma váriavel

setTimeout(function () {clearInterval(timeOut)}, 10000)
//setTimeout - faz a mesma coisa só que, só uma vez
//O clearInterval() é o que faz parar de execultar