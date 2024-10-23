function taskList(){
  masterKey =0
  document.addEventListener('click', function(e){
    const elemento = e.target
    const line = document.createElement("li")
    const list = document.querySelector(".list")
    const name = document.querySelector(".nome")

    if(elemento.classList.contains('add') && name.value != '' && masterKey < 3){
      const apagar = document.createElement('button')
      apagar.classList.add('apagar')

      apagar.textContent= 'Apagar'
      line.textContent= name.value

      line.appendChild(apagar)
      
      list.appendChild(line)
      masterKey++
    }

    if(elemento.classList.contains('apagar')){
      elemento.parentElement.remove()
      masterKey--
    }
  })
}
taskList()