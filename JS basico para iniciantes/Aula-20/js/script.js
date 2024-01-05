function meuEscopo(){
  const form = document.querySelector(".form") //Seleciona o elemento de classe 'form' e coloca dentro da variável 'form'
  const resultado = document.querySelector(".resultado");

  //Essa é uma forma de parar o envio dos dados ao clicar em enviar
  //form.onsubmit = function (evento){
  //  evento.preventDefault();
  //};
  
  const pessoas = [];

  //Essa é outra forma de parar o envio dos dados
  function recebeEventoForm(evento) {
    evento.preventDefault();

    const nome = form.querySelector('.nome');
    const sobrenome = form.querySelector('.sobrenome');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');
  }
    
  form.addEventListener("submit", recebeEventoForm);
}
meuEscopo();