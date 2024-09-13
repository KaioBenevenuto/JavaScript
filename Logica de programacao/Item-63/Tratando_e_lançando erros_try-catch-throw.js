/*
console.log(naoExisto)

saída>>
Erro: Uncaught ReferenceError: naoexisto is not defined
at <anonymous>:1:13
*/

//try = tentar
try{
    console.log(naoExisto)
} catch(erro){
    console.log('naoExisto não existe')
}
//É similar ao if/else

try{
    console.log(naoExisto)
} catch(erro){
    console.log(erro) //não exiba o erro do código ao usuário
}
/*
saída>>
Erro: Uncaught ReferenceError: naoexisto is not defined
at <anonymous>:1:13
*/

function soma(x, y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw('x e y precisam ser números')
        //para criar um erro igual ao erro padrão do js, é preciso colocar 'new Error' na frente do throw
    } 
    return x + y
}

try{
    console.log(soma(1, '3'))
} catch(erro){
    console.log(erro) 
    //dessa forma exibe a mensagen de erro criada, assim é mais seguro pois não mostrar a linha que ouve e outras informações
}