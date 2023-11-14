# JavaScript

- Linguagem de programação
    - interpretada e executada pelos navegadores

- A inteligência da tríade
    - HTML é a estrutura, CSS é a beleza e JS a inteligência

- Não é Java
    - apesar do nome ser semelhante, são linguagens diferentes

# Por que JS?

- Aplicativos
    - para WEB, Descktop(Electron) e Mobile(React Native)

- Empresas famosas
    - instagram, google, netflix, tick tok ...
 
- Moderna e viva
    - comunidade e linguagem que cresce cada vez mais

## Instruções e sintaxes

- Toda a linguagem é escrita com esses dois princípios

- <b>Instrução</b>
    - ordens ao computador
- <b>Sintaxe</b>
    - maneira correta de escrever

```
    alert("Fala, Dev") //Fala, Dev
    alert((10 * 100) + " abraços!") //1000 abraços!
```

💡Existem `palavras reservadas` da linguagem.
Elas são responsáveis por dar significado a diversas instruções.

## Executando JavaScript
Podemos execultar diretamente no navegador

- Ferramenta `DevTools`
    - apertando o atalho `F12` ou `Ctrl + Shift + I` do seu teclado 
- Plataformas online
    - fronteditor.dev
    - codepen.io
- Projeto local
    - arquivos no computador

## Variáveis

- Uma caixinha que quardamos um tipo de dado para usar mais tarde

## Tipos de dados

- Informações que podem ser em `texto`, `números`, `booleanos`(valores lógicos: verdadeiro ou falso), ou dados mais `estruturados` 

```
//let - declara e atribui valor(funciona da mesma forma que o var, porém ele só vai existir da linha dele para baixo)
let boasVindas = "Fala, Dev!";
boasVindas = "Fala, Dev! Beleza?!"

//const - uma constante não pode mudar o valor
const serHumano = true;
serHumano = false //Erro!
```


String(texto)  |Number  |Boolean
---------------|--------|---------
""             |1       |true
''             |1.2     |false
``             |        |

## Funções
- Agrupamento de código
- Reuso de código
- Mini programas dentro de um programa maior
- Toda linguagem oferece muitas opções

```
//Usando uma função
alert("Fala, Dev!") 

//Criando uma função
function soma(a, b){
    return a + b
}
```
## Objeto

- Atributo
    - são as propriedades de uma objeto

- Métodos
    - são as funcionalidades de um objeto

```
//Criando um objeto
const celular = {
    cor: 'preta',
    ligar: function(){
        alert('ligando.....')
    }
}

//Usando um objeto
celular.ligar() //ligando.....
```