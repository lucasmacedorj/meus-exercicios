
/* 
Exercício: API de Jogadores do Flamengo
Objetivo: criar um endpoint que busca um jogador específico pelo ID, na URL.

*/

import { Hono } from "hono";

interface Jogador {
    id: number;
    nome: string;
    posicao: string;
    numeroCamisa: number;
}

const jogadores: Jogador[] = [
    {id: 1, nome: "Neymar Jr", posicao: "Atacante", numeroCamisa: 10},
    {id: 2, nome: "Léo Pereira", posicao: "Zaguiro", numeroCamisa: 4},
    {id: 3, nome: "Lamine Yamal", posicao: "Ponta Direita", numeroCamisa: 19},
    {id: 4, nome: "Pedro Guilherme", posicao: "Centroavante", numeroCamisa: 9},
    {id: 5, nome: "Bruno Henrique", posicao: "Atacante", numeroCamisa: 27}

]

const app = new Hono()

app.get('/jogadores/:id', (c) => {
    const id = c.req.param('id')
    const jogador = jogadores.find((item) => item.id === Number(id))

    if(jogador) {
        return c.json(jogador)
    }else {
        return c.text('Chamado não enontrado', 404)
    }
})

app.get('/jogadores/posicao/:posicao', (d) => {
    
    const posicao = d.req.param('posicao')
    const posicaoJogador = jogadores.filter((item) => item.posicao === posicao)

    if(posicaoJogador) {
        return d.json(posicaoJogador)
    } else {
        return d.text('Posição não encontrada', 404)
    }
})

export default app

