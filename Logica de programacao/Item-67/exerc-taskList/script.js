function taskList(){
  document.addEventListener('click', function(e){
    const elemento = e.target
    const name = document.querySelector(".nome")

    if(elemento.classList.contains('add') && name.value != ''){
      const list = document.querySelector(".list")
      const line = document.createElement("li")
      const apagar = document.createElement('button')
      apagar.classList.add('apagar')

      apagar.textContent= 'Apagar'
      line.textContent= name.value

      line.appendChild(apagar)
      
      list.appendChild(line)
    }

    if(elemento.classList.contains('apagar')){
      elemento.parentElement.remove()
      //isso faz com que apague o elemento pai 
    }
  })
}
taskList()