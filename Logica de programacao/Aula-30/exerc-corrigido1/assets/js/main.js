function meuEscopo() {
  const data = new Date()
  const h1 = document.querySelector(".container h1")

  h1.innerHTML = data.toLocaleDateString("pt-BR", {dateStyle: "full", timeStyle: 'short'})
  // O objeto acima não está funcionando corretamente 
  // O elemento 'dateStyle: full' está funcionado mas o elemento 'timeStyle: short' não está funcionado, pelomenos não no navegador que eu estou utilizando(opera).
}
meuEscopo()