const form = document.querySelector("#formulario")

//Impede que o evento de "enviar" sejá concluído
form.addEventListener("submit", function (event) {
  event.preventDefault()

  const inputPeso = event.target.querySelector("#peso")
  const inputAltura = event.target.querySelector("#altura")

  const peso = Number(inputPeso.value)
  const altura = Number(inputAltura.value)

  if (!peso) {
    setResultado("Peso inválido", false)
    return
  }
  if (!altura) {
    setResultado("Altura inválida", false)
    return
  }

  const IMC = getIMC(peso, altura);
  const nivelImc = getNivelImc(IMC);
  const msg = `Seu IMC é ${IMC} (${nivelImc}).`;

  setResultado(msg, true);
})

//Retorna uma mensagem de acordo com IMC
function getNivelImc(IMC) {
  const nivel = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade de grau 1",
    "Obesidade de grau 2",
    "Obesidade de grau 3",
  ]

  if (IMC >= 39.9) return nivel[5];
  if (IMC >= 34.9) return nivel[4];
  if (IMC >= 29.9) return nivel[3];
  if (IMC >= 24.9) return nivel[2];
  if (IMC >= 18.5) return nivel[1];
  if(IMC < 18.5) return nivel[0];
}

//Calcula o IMC
function getIMC(peso, altura) {
  const imc = peso / altura ** 2
  return imc.toFixed(2)
}

//Cria um parágrafo
function criaP() {
  const p = document.createElement("p")
  return p
}

//Seta o resultado
function setResultado(msg, isValid) {
  const resultado = document.querySelector("#resultado")
  resultado.innerHTML = ""

  const p = criaP()

  if (isValid) {
    p.classList.add("paragrafo-resultado");
  } else {
    p.classList.add("bad");
  }

  p.innerHTML = msg
  resultado.appendChild(p)
}
