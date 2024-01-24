function meuEscopo(){
  const peso = document.querySelector("#peso");
  const altura = document.querySelector("#altura");
  const IMC = (peso / altura) ** 2;
  let resultado;

  if (IMC < 18.5) {
    resultado = `Seu IMC é ${IMC} (Abaixo do peso)`
  } else if (IMC >= 18.5 || IMC <= 24.9) {
    resultado = `Seu IMC é ${IMC} (Peso normal)`
  } else if (IMC >= 25 || IMC <= 29.9) {
    resultado = `Seu IMC é ${IMC} (Sobrepeso)`
  } else if (IMC >= 30 || IMC <= 34.9) {
    resultado = `Seu IMC é ${IMC} (	Obesidade de grau 1)`
  } else if (IMC >= 35 || IMC <= 39.9) {
    resultado = `Seu IMC é ${IMC} (	Obesidade de grau 2)`
  } else if (IMC >= 40) {
    resultado = `Seu IMC é ${IMC} (	Obesidade de grau 3)`
  } else if (Number.isNAN(peso)) {
    resultado = `Peso inválido`
  } else if (Number.isNAN(altura)) {
    resultado = `Altura inválida`
  } 

}
meuEscopo()