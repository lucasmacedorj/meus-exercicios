/* 

O que é fetch

fetch é uma função nativa do JavaScript que faz exatamente o que você estudou no Dia 12 (HTTP) — ela envia uma requisição pra um servidor e devolve a resposta. E ela devolve uma Promise (lembra do Dia 11?), porque buscar algo na internet demora um tempo indeterminado.

A estrutura básica: 



async function buscarDados() {
    let resposta = await fetch("https://alguma-api.com/dados")
    let dados = await resposta.json()
    console.log(dados)
}

buscarDados() */

// BUSCANDO POKÉMON 

  async function buscarPokemon(nome) {
  try {
    let resposta = await fetch("https://pokeapi.co/api/v2/pokemon/" + nome);
    
    if (resposta.ok) {
      let dados = await resposta.json();
      
      // Acessando os campos
        console.log("O " + dados.name + " tem altura: " + dados.height + " e o peso: " + dados.weight)
    } else {
      console.log("Pokémon não encontrado. Status: " + resposta.status);
    }
  } catch (erro) {
    console.log("Erro de conexão: " + erro.message);
  }
}

buscarPokemon("pikachu"); 



 /* exercício

Objetivo: buscar dados de um Pokémon (ou outra API pública, se preferir) e imprimir 3 campos específicos dele, de forma legível. */ 

