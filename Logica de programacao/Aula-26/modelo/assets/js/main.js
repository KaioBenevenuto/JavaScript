function meuEscopo(){
  const peso = document.querySelector("#peso");
  const altura = document.querySelector("#altura");
  const form = document.querySelector("#form");
  const resultado = document.querySelector("#resultado")

  const IMC = (peso / altura) ** 2;
  let result;
  
  function recebeEventoForm(evento) {
    evento.preventDefault()
    
    if (IMC < 18.5) {
      result = `Seu IMC é ${IMC} (Abaixo do peso)`
    } else if (IMC >= 18.5 || IMC <= 24.9) {
      result = `Seu IMC é ${IMC} (Peso normal)`
    } else if (IMC >= 25 || IMC <= 29.9) {
      result = `Seu IMC é ${IMC} (Sobrepeso)`
    } else if (IMC >= 30 || IMC <= 34.9) {
      result = `Seu IMC é ${IMC} (Obesidade de grau 1)`
    } else if (IMC >= 35 || IMC <= 39.9) {
      result = `Seu IMC é ${IMC} (Obesidade de grau 2)`
    } else if (IMC >= 40) {
      result = `Seu IMC é ${IMC} (Obesidade de grau 3)`
    } else if (Number.isNaN(peso)) {
      result = `Peso inválido`
    } else if (Number.isNaN(altura)) {
      result = `Altura inválida`
    }
    /*Tenho que ver o que está acontecendo de errado no if para retornar só "undefined"*/
    
    resultado.innerHTML = result
  }

  form.addEventListener("submit", recebeEventoForm)
}
meuEscopo()