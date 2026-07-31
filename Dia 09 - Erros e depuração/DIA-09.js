/* Dia 9 — Erros e depuração (o dia mais importante da semana) 

Antes de rodar, leia o código e escreva o que você acha que vai dar de erro (tipo do erro + por quê)
Depois, rode de verdade no terminal e compare com o que você previu
Só então, conserte o bug 

Exercício: peça ao Claude 3 scripts pequenos com bugs de propósito e
conserte cada um. Antes de consertar, escreva o que você acha que está errado */ 

/*

Exercicio 1:

function calcularMedia(nota1, nota2) {
  let soma = nota1 + nota2
  let media = soma / 2
  
  return media 
  // A variavel media não foi declarada, acredito que o tipo do erro seria ReferenceError. 
} 

console.log(calcularMedia(8, 6)) */ 

// EXERCICÍO: 2  

/*
let chamado = {
  titulo: "Erro no sistema",
  status: "aberto",
  prioridade: "alta"
}

console.log(chamado.prioridade.toUpperCase()) // A chave referenciada não existe no objeto JavaScript sendo erro do tipo TypeError. */

// EXERCICÍO 3 

/*
let numeros = [10, 20, 30]

for (let i = 0; i <= numeros.length; i++) {
  console.log(numeros[i])
}

Erro: Como se trata de um array de 4 posições e na condição do "for" tem i <= numero.length da "undefined" pois o JavaScript não encontra o número na 4ª posição. O correto seria colocar o sinal de < nem o = que assim trará o resultado somente do tamanho do array definido.  */

// Exercicio 4  

let idadeMinima = "18"
let idadeUsuario = 18

if (idadeUsuario === idadeMinima) {
  console.log("Idade permitida!")
} else {
  console.log("Acesso negado")
}
 
//acredito que o erro esteja nessa questão de ter a idade como string e outra como inteiro pq mesmo aparentemente tendo um valor igual eles são tipos diferentes e pode causar confusões futuramente. Correção: if (idadeUsuario === Number(idadeMinima))

