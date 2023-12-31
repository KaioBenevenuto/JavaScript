<h1>Const com valores mutáveis</h1>

<p>
<code>const</code> descreve uma <strong>variável</strong> que não pode ser <strong>reatribuída</strong> (com o operador de atribuição =). Depois de criá-la, não podemos fazer algo assim:
</p>

<pre>
const nome = 'luiz';
nome = 'joão'; // Erro: Assignment to constant variable.
</pre>
Porém, existe uma diferença entre variável e valor.

<p>
Variáveis são como <strong>um apelido para um valor</strong>, uma espécie de indicação para mencionar algum valor salvo na memória.
</p>

<p>
Já valores são os dados que realmente ficam salvos na memória e sustentam determinado tipo. Alguns tipos de valores <strong>são imutáveis</strong>, como <code>number</code>, <code>string</code>, <code>boolean</code>, <code>undefined</code>, <code>null</code>, <code>symbol</code> e <code>bigint</code> (<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures' target="_blank">os primitivos todos são imutáveis</a>). Outros tipos são mutáveis, como <code>arrays</code> e <code>objetos</code> (objetos em geral são mutáveis, com exceção de <code>null</code>).
</p>

<p>
Valores mutáveis geralmente são estruturas de dados mais complexas que sustentam outros valores ou comportamentos internamente. Como é o caso do array, que pode ser composto por vários outros tipos de dados.
</p>

<p>
Quando usamos <code>const</code> com tipos primitivos, esse valor nunca mais poderá ser alterado. Nesse caso, além de <code>const</code> não permitir reatribuição, o valor também é imutável (consequentemente, nunca podemos alterar essa constante).
</p>

<p>
Já quando usamos <code>const</code> com valores mutáveis (como arrays e objetos), a variável continua sendo constante, porém os valores dentro do objeto poderão ser alterados. Isso acontece porque quando alteramos um valor interno de um objeto, não ocorre a reatribuição da variável com sinal de atribuição = (a variável continua apontando para o mesmo local na memória), apenas a alteração de um valor interno do mesmo objeto.
</p>

<p>
Por este motivo, pode-se usar <code>const</code> com objetos mutáveis e ainda assim alterar seus valores internos. A única coisa que não vamos conseguir fazer é reatribuir o valor da variável.
</p>

Exemplos: </br>

<h2>Isso pode</h2>
<pre>
const array = [1, 2, 3, 4, 5];
array.pop();
array[0] = 1024;
console.log(array); // [ 1024, 2, 3, 4 ]
</pre> 
<h2>Isso NÃO pode</h2>
<pre>
const array = [1, 2, 3, 4, 5];
array = 'Legal'; // Assignment to constant variable.
</pre>