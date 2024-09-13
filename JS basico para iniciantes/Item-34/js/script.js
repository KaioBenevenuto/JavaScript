function meuEscopo() {
  const form = document.querySelector(".form") //Seleciona o elemento de classe 'form' e coloca dentro da variável 'form'
  const resultado = document.querySelector(".resultado")
  
  //Essa é uma forma de parar o envio dos dados ao clicar no 'button' enviar
  //form.onsubmit = function (evento){
  //  evento.preventDefault();
  //};
  
  const pessoas = []
  
  //Essa é outra forma de parar o envio dos dados
  function recebeEventoForm(evento) {
    evento.preventDefault()

    const nome = form.querySelector(".nome")
    const sobrenome = form.querySelector(".sobrenome")
    const peso = form.querySelector(".peso")
    const altura = form.querySelector(".altura")

    //console.log(nome.value, sobrenome.value, peso.value, altura.value).
    //O 'value' está mostrando o valor armazenado dentro do input, que está dentro da constante
    
    /*
    const criaPessoa = {
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value,
    }

    pessoas.push(criaPessoa)
    */
    
    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value
    });

    console.log(pessoas)

    /*
    resultado.innerHTML = ""
    resultado.innerHTML = `<br>`
    pessoas.map((pessoaItem) => {
      resultado.innerHTML += `${pessoaItem.nome} ${pessoaItem.sobrenome} ${pessoaItem.peso} ${pessoaItem.altura} <br>`
    })
    */

    resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
  }

  form.addEventListener("submit", recebeEventoForm)//"addEventListener" -> adicionar ouvinte de evento, "submit" -> enviar
}
meuEscopo()
