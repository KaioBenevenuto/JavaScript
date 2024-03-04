function meuEscopo() {
  const elementos = [
    { tag: "p", texto: "Frase 1" },
    { tag: "div", texto: "Frase 2" },
    { tag: "footer", texto: "Frase 3" },
    { tag: "section", texto: "Frase 4" },
  ]

  function criaElementos() {
    const p = document.createElement("p")
    const div = document.createElement("div")
    const footer = document.createElement("footer")
    const section = document.createElement("section")

    return [p, div, footer, section]
  }

  let arrayDeElementos = criaElementos()

  function adicionaValores(arrayDeElementos) {
    for (i = 0; i < arrayDeElementos.length; i++) {
      arrayDeElementos[i].innerHTML = `Frase ${i + 1}`
    }
    return arrayDeElementos
  }

  arrayDeElementos = adicionaValores(arrayDeElementos)

  function criaDiv0() {
    const div0 = document.createElement("div")
    return div0
  }

  function adicionaElementosNaDiv0(div0, arrayDeElementos) {
    for (i = 0; i < arrayDeElementos.length; i++) {
      div0.append(arrayDeElementos[i])
    }
    return div0
  }

  const resultado = document.querySelector(".container")
  
  resultado.append(adicionaElementosNaDiv0(criaDiv0(), arrayDeElementos))
}
meuEscopo()