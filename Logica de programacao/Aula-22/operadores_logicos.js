/*
&& -> AND -> E
|| -> OR -> OU
! -> NOT -> NÃO
*/

//&& -> As duas comparações devem ser "true" para retornar 'true'
//            V        V
console.log(2 > 1 && 5 < 9)//true
//            F        V
console.log(2 > 3 && 5 < 9)//false


//|| -> Contando que uma das comparações seja "true" irá retornar 'true'
//            F        V
console.log(2 > 3 || 5 < 9)//true
//            F        F
console.log(2 > 3 || 5 < 2)//false


//! -> Nega o resultado, se for "true" irá retornar 'false' e se for "false" retorna 'true'
console.log(!true)//false
console.log(!false)//true