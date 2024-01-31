function meuEscopo() {
  const form = document.querySelector("#form")
  
  function recebeEventoForm(evento) {
    evento.preventDefault()

    let peso = document.querySelector("#peso")
    let altura = document.querySelector("#altura")
    const resultado = document.querySelector("#resultado")
    let result

    let IMC = peso.value / altura.value ** 2
    IMC = IMC.toFixed(2)

    if ((peso.value > -1 && peso.value < 1) || isNaN(peso.value) || peso.value === "") {
      resultado.style.backgroundColor = "crimson"
      result = `Peso inválido`
    } else if ((altura.value > -1 && altura.value < 1) || isNaN(altura.value) || altura.value === "") {
      resultado.style.backgroundColor = "crimson"
      result = `Altura inválida`
    } else if (IMC < 18.5) {
      resultado.style.backgroundColor = "aquamarine"
      result = `Seu IMC é ${IMC} (Abaixo do peso)`
    } else if (IMC >= 18.5 && IMC <= 24.9) {
      resultado.style.backgroundColor = "aquamarine"
      result = `Seu IMC é ${IMC} (Peso normal)`
    } else if (IMC >= 25 && IMC <= 29.9) {
      resultado.style.backgroundColor = "aquamarine"
      result = `Seu IMC é ${IMC} (Sobrepeso)`
    } else if (IMC >= 30 && IMC <= 34.9) {
      resultado.style.backgroundColor = "aquamarine"
      result = `Seu IMC é ${IMC} (Obesidade de grau 1)`
    } else if (IMC >= 35 && IMC <= 39.9) {
      resultado.style.backgroundColor = "aquamarine"
      result = `Seu IMC é ${IMC} (Obesidade de grau 2)`
    } else {
      resultado.style.backgroundColor = "aquamarine"
      result = `Seu IMC é ${IMC} (Obesidade de grau 3)`
    } 

    resultado.style.marginTop = "20px"
    resultado.style.height = "50px"
    resultado.style.borderRadius = "4px"
    resultado.style.fontSize = "20px"
    //Falta ainda centralizar a mensagem no meio

    resultado.innerHTML = result
  }

  form.addEventListener("submit", recebeEventoForm)
}
meuEscopo()
