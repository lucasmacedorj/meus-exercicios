/* EXERCÍCIO FIZZBUZZ

Objetivo: Imprima os números de 1 até 30 no console, seguindo essas regras:

Se o número for múltiplo de 3, imprima "Fizz" (ao invés do número)
Se o número for múltiplo de 5, imprima "Buzz" (ao invés do número)
Se o número for múltiplo de 3 e de 5 ao mesmo tempo, imprima "FizzBuzz"
Se não for múltiplo de nenhum dos dois, imprima o número normalmente */ 

 for (let i = 1; i <= 30; ++ i) {
    
    if(i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    } 
    else if (i % 5 === 0) {
        console.log("Buzz")
    } 
    else if (i % 3 === 0) {
        console.log("Fizz")
    } 
    else {
        console.log(i)
    }
    console.log("NUMERO: " + i)
}
 

 /* Exercício 2: Tabuada com condição

Objetivo: Imprima a tabuada de multiplicação do número 7, de 1 até 10 (ou seja: 7 x 1, 7 x 2, ... até 7 x 10).

Mas com uma regra extra:

Se o resultado da multiplicação for um número par, imprima o resultado normalmente
Se o resultado da multiplicação for um número ímpar, imprima o resultado seguido da palavra "(ímpar)" */


/* for (let tabuada = 1; tabuada <= 10; tabuada++) {

    let resultado = tabuada * 7 

    if(resultado % 2 === 0) { 
        console.log("7 x " + tabuada + " = " + resultado)
    } 
     else {
        console.log("7 x " + tabuada + " = " + resultado + " IMPAR")
    }
    
    console.log(resultado)
}
*/

/* EXERCICÍO 3 

Objetivo: Você tem uma lista de 5 jogadores fictícios, cada um com uma quantidade de gols marcados na temporada. Percorra essa lista e, pra cada jogador, imprima uma classificação de acordo com o número de gols:

Se o jogador fez 20 gols ou mais → imprima o nome + "Artilheiro"
Se o jogador fez entre 10 e 19 gols (incluindo os dois) → imprima o nome + "Bom desempenho"
Se o jogador fez menos de 10 gols → imprima o nome + "Precisa melhorar"  

let jogador1 = "Ronaldinho"
let jogador2 = "Vini Jr"
let jogador3 = "Cristiano Ronaldo"
let jogador4 = "Neymar Jr"
let jogador5 = "Pedro Guilherme"

let gols1 = 10
let gols2 = 7
let gols3 = 25
let gols4 = 22
let gols5 = 28

if (gols1 >= 20) {
    console.log("Com "+ gols1 + " gols " + jogador1 +" É Artilheiro")
} else if (gols1 >= 10 && gols1 <= 19) {
    console.log("Com " + gols1 + " gols "  + jogador1 + " Teve um Bom Desempenho")
} else {
    console.log("Com apenas " + gols1 + " gols " + jogador1 + " Precisa Melhorar" )
}

if (gols2 >= 20) {
    console.log("Com "+ gols2 + " gols " + jogador2 +" É Artilheiro")
} else if (gols2 >= 10 && gols2 <= 19) {
    console.log("Com " + gols2 + " gols " + jogador2 + " Teve um Bom desempenho")
} else {
    console.log("Com apenas " + gols2 + " gols " + jogador2 + " Precisa melhorar")
}


if (gols3 >= 20) {
    console.log("Com "+ gols3 + " gols " + jogador3 +" É Artilheiro")
} else if (gols3 >= 10 && gols3 <= 19) {
    console.log("Com " + gols3 + " gols" + jogador3 + " Teve um Bom Desempenho")
} else {
    console.log("Com apenas " + gols3 + " gols " + jogador3 + " Precisa Melhorar" )
} 



if (gols4 >= 20) {
    console.log("Com "+ gols4 + " gols " + jogador4 +" É Artilheiro")
} else if (gols4 >= 10 && gols4 <= 19) {
    console.log("Com " + gols4 + " gols " + jogador4 + " Teve um Bom Desempenho")
} else {
    console.log("Com apenas " + gols4 + " gols " + jogador4 + " Precisa Melhorar" )
}

if (gols5 >= 20) {
    console.log("Com "+ gols5 + " gols " + jogador5 +" É Artilheiro")
}else if (gols5 >= 10 && gols5 <= 19) {
    console.log("Com " + gols5 + " gols " + jogador5 + " Teve um Bom Desempenho")
} else {
    console.log("Com apenas " + gols5 + " gols " + jogador5 + " Precisa Melhorar" )
}
*/

/* Exercicío 4 

Exercício: Sistema de Evolução Pokémon

Cenário: Você está criando o sistema de evolução de um jogo Pokémon. Cada Pokémon tem uma quantidade de pontos de experiência (XP), e você precisa descobrir em qual estágio de evolução ele está e se ele ganha um bônus especial.

Regras de evolução (baseadas no XP):
XP maior ou igual a 100 → "Estágio Final"
XP entre 50 e 99 (incluindo os dois) → "Segunda Evolução"
XP entre 20 e 49 (incluindo os dois) → "Primeira Evolução"
XP menor que 20 → "Forma Básica"
Regra extra (bônus):
Se o XP for múltiplo de 10 (em qualquer estágio), o Pokémon ganha uma Pedra Evolutiva e você deve imprimir também "+ Ganhou Pedra Evolutiva!" junto com o estágio dele 

let pokemon1 = "Charizard"
let pokemon2 = "Ivysaur"
let pokemon3 = "Wartortle"
let pokemon4 = "Pichu"
let pokemon5 = "Metapod"

let xp1 = 120
let xp2 = 45
let xp3 = 60
let xp4 = 15
let xp5 = 30


if (xp1 >= 100) {
    let mensagem = "O Pokémon " + pokemon1 + " está em ESTÁGIO FINAL "
    
    if (xp1 % 10 === 0){
        mensagem = mensagem + " +  Ganhou uma PEDRA EVOLUTIVA "
    }
    console.log(mensagem)
} else if (xp1 >= 50 && xp1 <= 99) {
    let mensagem = "O Pokémon " + pokemon1 + " está em SEGUNDA EVOLUÇÃO "
    
    if (xp1 % 10 === 0){
        mensagem = mensagem + " +  Ganhou uma PEDRA EVOLUTIVA "
    }
    console.log(mensagem)
} else if (xp1 >= 20 && xp1 <= 49){
    let mensagem = "O Pokémon " + pokemon1 + " está em PRIMEIRA EVOLUÇÃO "
    
    if (xp1 % 10 === 0){
        mensagem = mensagem + " +  Ganhou uma PEDRA EVOLUTIVA "
    }
    console.log(mensagem)
} else {
    console.log("O Pokémon " + pokemon1 + " Está em sua FORMA BÁSICA")
}



if (xp2 >= 100) {
    let mensagem = "O Pokémon " + pokemon2 + " está em ESTÁGIO FINAL "
    
    if (xp2 % 10 === 0){
        mensagem = mensagem + " +  Ganhou uma PEDRA EVOLUTIVA "
    }
    console.log(mensagem)
} else if (xp2 >= 50 && xp2 <= 99) {
    let mensagem = "O Pokémon " + pokemon2 + " está em SEGUNDA EVOLUÇÃO "
    
    if (xp2 % 10 === 0){
        mensagem = mensagem + " +  Ganhou uma PEDRA EVOLUTIVA "
    }
    console.log(mensagem)
} else if (xp2 >= 20 && xp2 <= 49){
    let mensagem = "O Pokémon " + pokemon2 + " está em PRIMEIRA EVOLUÇÃO "
    
    if (xp2 % 10 === 0){
        mensagem = mensagem + " +  Ganhou uma PEDRA EVOLUTIVA "
    }
    console.log(mensagem)
} else {
    console.log("O Pokémon " + pokemon2 + " Está em sua FORMA BÁSICA")
}

if (xp3 >= 100) {
    let mensagem = "O Pokémon " + pokemon3 + " está em ESTÁGIO FINAL "
    
    if (xp3 % 10 === 0){
        mensagem = mensagem + " +  Ganhou uma PEDRA EVOLUTIVA "
    }
    console.log(mensagem)
} else if (xp3 >= 50 && xp3 <= 99) {
    let mensagem = "O Pokémon " + pokemon3 + " está em SEGUNDA EVOLUÇÃO "
    
    if (xp3 % 10 === 0){
        mensagem = mensagem + " +  Ganhou uma PEDRA EVOLUTIVA "
    }
    console.log(mensagem)
} else if (xp3 >= 20 && xp3 <= 49){
    let mensagem = "O Pokémon " + pokemon3 + " está em PRIMEIRA EVOLUÇÃO "
    
    if (xp3 % 10 === 0){
        mensagem = mensagem + " +  Ganhou uma PEDRA EVOLUTIVA "
    }
    console.log(mensagem)
} else {
    console.log("O Pokémon  " + pokemon3 + " Está em sua FORMA BÁSICA")
}

if (xp4 >= 100) {
    let mensagem = "O Pokémon " + pokemon4 + " está em ESTÁGIO FINAL "
    
    if (xp4 % 10 === 0){
        mensagem = mensagem + " +  Ganhou uma PEDRA EVOLUTIVA "
    } console.log(mensagem)
} else if (xp4 >= 50 && xp4 <= 99) {
    let mensagem = "O Pokémon " + pokemon4 + " está em SEGUNDA EVOLUÇÃO "
    
    if (xp4 % 10 === 0){
        mensagem = mensagem + " +  Ganhou uma PEDRA EVOLUTIVA "
    }
    console.log(mensagem)
} else if (xp4 >= 20 && xp4 <= 49){
    let mensagem = "O Pokémon " + pokemon4 + " está em PRIMEIRA EVOLUÇÃO "
    
    if (xp4 % 10 === 0){
        mensagem = mensagem + " +  Ganhou uma PEDRA EVOLUTIVA "
    }
    console.log(mensagem)
} else {
    console.log("O Pokémon " + pokemon4 + " Está em sua FORMA BÁSICA")
}

if (xp5 >= 100) {
    let mensagem = "O Pokémon " + pokemon5 + " está em ESTÁGIO FINAL "
    
    if (xp5 % 10 === 0){
        mensagem = mensagem + " +  Ganhou uma PEDRA EVOLUTIVA "
    }
    console.log(mensagem)
} else if (xp5 >= 50 && xp5 <= 99) {
    let mensagem = "O Pokémon " + pokemon5 + " está em SEGUNDA EVOLUÇÃO "
    
    if (xp5 % 10 === 0){
        mensagem = mensagem + " +  Ganhou uma PEDRA EVOLUTIVA "
    }
    console.log(mensagem)
} else if (xp5 >= 20 && xp5 <= 49){
    let mensagem = "O Pokémon " + pokemon5 + " está em PRIMEIRA EVOLUÇÃO "
    
    if (xp5 % 10 === 0){
        mensagem = mensagem + " +  Ganhou uma PEDRA EVOLUTIVA "
    }
    console.log(mensagem)
} else {
    console.log("O Pokémon " + pokemon5 + " Está em sua FORMA BÁSICA")
} */

    