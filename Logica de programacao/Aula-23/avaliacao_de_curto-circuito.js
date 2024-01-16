/*
* FALSY -> valores avaliados em falço, qualquer valor diferente desses retorna 'true'
*
* false
* 0
* '', "", ``
* null / undefined
* NaN
*/

/*
* Avaliação de curto-circuito:
*
* && -> Assim que identifica um 'false' retorna 'false', se não identifica nenhum, retorna o último valor sendo 'true' ou * 'false'
*/

//          true   true false true
console.log("oi" && 12 && 0 && 1)//Saíde = 0
//          true   true  true
console.log("oi" && 12 && 1)//Saíde = 1


/*
* || -> Assim que identifica um true retorna true, se não identifica nenhum, retorna o último     * valor sendo 'true' ou 'false'
*/

//        false  false  true  false
console.log('' || NaN || 10 || 0)//Saíde = 10
//        false  false  false   
console.log("" || NaN || null)//Saíde = null
