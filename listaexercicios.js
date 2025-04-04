//1. Completar a função para somar dois números
function somar(a, b) {
return a + b;
}
console.log(somar(5, 3)); // 8
//2. Criar uma função que retorne 'Par' ou 'Ímpar'
function parOuImpar(numero) {
return numero % 2 === 0 ? 'Par' : 'Ímpar';
}
console.log(parOuImpar(4)); // 'Par'
//3. Escreva um programa que converta metros em centímetros e milímetros.
m = 10
let metros = m
let centimetros = m*100
let milimetros = m*1000

//4.Dado o array const frutas = ['maçã', 'banana'];, adicione as frutas 'laranja' e 'uva'
//ao final do array, usando método.
const frutas = ['maçã', 'banana']
frutas.push('laranja','uva')
console.log(frutas)

//5.Considere o array const numeros = [1, 2, 3, 4, 5];. Remova o último elemento do
//array e armazene-o em uma variável chamada ultimoNumero, usando método.
const numeros = [1, 2, 3, 4, 5];
let ultimoNumero = numeros.pop()
console.log(ultimoNumero)

//6. Dado o array const cores = ['vermelho', 'azul', 'verde'];, remova o primeiro
//elemento e armazene-o em uma variável chamada primeiraCor, usando método .
const cores = ['vermelho', 'azul', 'verde']
let cor = cores.shift()
console.log(cor)

//7.Com o array const animais = ['cachorro', 'gato'];, adicione os animais 'elefante' e
//'leão' no início do array, usando método.
const animais = ['cachorro', 'gato']
animais.unshift('elefante','leão')
console.log(animais)

//8.Dado o array const numeros = [10, 20, 30, 40, 50];, remova os dois primeiros
//elementos e, em seguida, adicione os números 5 e 15 nas primeiras posições,
//usando método.
const numeros2 = [10, 20, 30, 40, 50]
numeros2.splice(0,2,5,15)
console.log(numeros2)

//9. Considere o array const letras = ['a', 'b', 'c', 'd', 'e'];. Crie um novo array contendo
//apenas os elementos 'b', 'c' e 'd', usando método
const letras = ['a', 'b', 'c', 'd', 'e']
const letrasNovas = letras.slice(1,4)
console.log(letrasNovas)

//10. Dado os arrays const array1 = [1, 2, 3]; e const array2 = [4, 5, 6]; crie um novo
//array que combine os elementos de ambos, usando o método concat
const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
array3 = array1.concat(array2)

//11. Criar uma função que recebe um nome e retorna uma saudação personalizada
function saudacao(nome) {
    return `Olá ${nome}!`
}

console.log(saudacao("Carlos")); // "Olá, Carlos!"
console.log(saudacao("Ana")); // "Olá, Ana!"
/*
12. Qual a diferença entre var, let e const?
var é mais antigo, deve ser usado para programas com suporte mais antigo. let é para quando 
a váriavel pode mudar de formato ou de valor ao longo do programa. const é para quando a variável
não varia nem de valor, nem de formato

13. O que acontece quando você tenta acessar uma variável que ainda não foi definida?
Gera um erro no terminal

14. Como funciona o typeof? Escreva um código usando o typeof
O typeof devolve o formato da variável, seja este string, numero inteiro, booleana, data, entre outros.
*/
num = 1
console.log(typeof(num))
