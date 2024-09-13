const paragrafos = document.querySelector('.paragrafos');

const ps = paragrafos.querySelectorAll('p');
// Vai retornar uma NodeList
// NodeList - Apesar de se comportar como um array o NodeList faz parte do DOM (logo ele não é nativo do JS)

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody)

for(let p of ps){
  p.style.backgroundColor = backgroundColorBody
  p.style.color = 'white'
}