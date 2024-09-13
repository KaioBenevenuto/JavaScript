try{
  //Essa parte é execultada quando não há erros 
}catch(erro){
  //Essa quando há erros
} finally{
  //Sempre será execultado | Não é necessário o uso, caso não precise pode ser omitido
}

//Um exemplo de caso de uso:
try {
  console.log('Abrir um arquivo')
  console.log("Manipulei um arquivo e gerou erro") 
  //Como aqui ouve um erro as linhas de baixo não serão execultados
  console.log("Fechei arquivo")
} catch (erro) {
  console.log('Tratando o erro')
} finally {
  console.log("Fechei arquivo")
}

function retornaHora(data){
  if(data && !(data instanceof Date)){
    throw new TypeError('Esperando instância de Date.')
  }
  if(!data){
    data = new Date()
  }
  return data.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  })
}
console.log(retornaHora()) //Retorna a hora atual
console.log(retornaHora(1)) //Retorna mensagem de erro