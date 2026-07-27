/* 
       ** DIA 04 **
** EXERCÍCIOS DE FUNÇÃO ** 

EXERCÍCIO DO DIA 03: 

Exercício: transforme cada exercício do
Dia 3 em uma função que recebe uma entrada e retorna um resultado.

EXERCÍCIO 01 - Objetivo: Imprima os números de 1 até 30 no console, seguindo essas regras:

Se o número for múltiplo de 3, imprima "Fizz" (ao invés do número)
Se o número for múltiplo de 5, imprima "Buzz" (ao invés do número)
Se o número for múltiplo de 3 e de 5 ao mesmo tempo, imprima "FizzBuzz"
Se não for múltiplo de nenhum dos dois, imprima o número normalmente ]

*/

/*

function fizzBuzz(numero) {
    if (numero % 3 !== 0 && numero % 5 !== 0) {
        return numero
    }
    else if (numero % 3 === 0 && numero % 5 === 0) {
        return "FizzBuzz"
    }
    else if (numero % 5 === 0) {
        return "Buzz"
    }
    else if ( numero % 3 === 0) {
        return "Fizz"
    }
}

for (let i = 1; i <= 30; i++) {
    console.log(fizzBuzz(i))
}
*/

/* Exercício 2: Tabuada com condição

Objetivo: Imprima a tabuada de multiplicação do número 7, de 1 até 10 (ou seja: 7 x 1, 7 x 2, ... até 7 x 10).

Mas com uma regra extra:

Se o resultado da multiplicação for um número par, imprima o resultado normalmente
Se o resultado da multiplicação for um número ímpar, imprima o resultado seguido da palavra "(ímpar)" */

/* 

function tabuadaDoSete(numero) {
    
    let resultado = numero * 7

    if(resultado % 2 === 0) {
        return "7 x " + numero + " = " + resultado
    } 
    else  {
        return "7 x " + numero + " = " + resultado + " ÍMPAR "
    } 
    
}

for (let i = 1; i <= 10; i++) {
    console.log(tabuadaDoSete(i))
}
    
*/

/* EXERCICÍO 3 

Objetivo: Você tem uma lista de 5 jogadores fictícios, cada um com uma quantidade de gols marcados na temporada. Percorra essa lista e, pra cada jogador, imprima uma classificação de acordo com o número de gols:

Se o jogador fez 20 gols ou mais → imprima o nome + "Artilheiro"
Se o jogador fez entre 10 e 19 gols (incluindo os dois) → imprima o nome + "Bom desempenho"
Se o jogador fez menos de 10 gols → imprima o nome + "Precisa melhorar"  */

/*
let jogadores = ["Ronaldinho" , "Neymar" , "Cristiano Ronaldo", "Pedro Guilherme ", "Vini Jr"]

let gols = [10,7,25,22,28] 

function jogadorArtilheiro(jogadores,gols) {
    if (gols >= 20) {
        return jogadores + " COM " + gols + " É ARTILHEIRO!! "
    } else if (gols >= 10 && gols <= 19) {
        return jogadores + "  COM " + gols + " TEVE UM BOM DESEMPENHO"
    } else {
        return jogadores + " PRECISA MELHORAR"
    }
}

for (let i = 0; i < jogadores.length; i++) {
    console.log(jogadorArtilheiro(jogadores[i], gols[i]))
} */

/* Exercicío 4 

Exercício: Sistema de Evolução Pokémon

Cenário: Você está criando o sistema de evolução de um jogo Pokémon. Cada Pokémon tem uma quantidade de pontos de experiência (XP), e você precisa descobrir em qual estágio de evolução ele está e se ele ganha um bônus especial.

Regras de evolução (baseadas no XP):

XP maior ou igual a 100 → "Estágio Final"
XP entre 50 e 99 (incluindo os dois) → "Segunda Evolução"
XP entre 20 e 49 (incluindo os dois) → "Primeira Evolução"
XP menor que 20 → "Forma Básica"
Regra extra (bônus):
Se o XP for múltiplo de 10 (em qualquer estágio), o Pokémon ganha uma Pedra Evolutiva e você deve imprimir também "+ Ganhou Pedra Evolutiva!" junto com o estágio dele */

let pokemom = ["Charizard", "Ivysaur", "Wartortle", "Pichu", "Metapod"]
let xp = [120,45,60,15,30]

function evolucaoPokemon (pokemom,xp) {
    if (xp >= 100) {
        return pokemom + " Está em estágio final"  
    } 
}