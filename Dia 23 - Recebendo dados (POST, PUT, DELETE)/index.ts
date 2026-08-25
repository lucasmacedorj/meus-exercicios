/* 

O que muda em relação ao GET

Até agora, suas rotas só liam dados (GET) — e não precisavam receber nada além do que já vinha na própria URL (como o :id). Agora, pra criar ou atualizar algo, você precisa receber dados no corpo (body) da requisição — lembra do Dia 12, quando vimos que o corpo carrega as informações "de verdade" que estão sendo enviadas? */ 

// POST — Criando um novo registro

/* 

import { Hono } from "hono";

const app = new Hono()

interface Chamado {
    id: number;
    titulo: string;
    status: string
}

let chamados: Chamado[] = [
    {id: 1, titulo: "Erro ao acessar o sistema", status: "Aberto"},
    {id: 2, titulo: "Lentidão ao emitir relatório", status: "Fechado"},
    {id: 3, titulo: "Usuário não encontrado", status: "Fechado"}
]

app.post('/chamados', async (c) =>{
    const corpo = await c.req.json()

    const novoChamado: Chamado = {
        id: chamados.length + 1,
        titulo: corpo.titulo,
        status: "Aberto"
    }

    chamados.push(novoChamado)

    return c.json(novoChamado, 201)
})

export default app 

----------------------------------------------------------------- */


// PUT — Atualizando um registro existente
/* 
import { Hono } from "hono";

const app = new Hono

interface Chamado {
    id: number;
    titulo: string;
    status: string
}

let chamados: Chamado[] = [
    {id: 1, titulo: "Erro ao acessar o sistema", status: "Aberto"},
    {id: 2, titulo: "Lentidão ao emitir relatório", status: "Fechado"},
    {id: 3, titulo: "Usuário não encontrado", status: "Fechado"}
]

app.put('/chamados/:id', async (c) => {
    
    const id = c.req.param('id')
    const corpo = await c.req.json()

    const chamado = chamados.find((item) => item.id === Number(id))

    if(chamado) {
        chamado.status = corpo.status
        return c.json(chamado)
    } else {
        return c.text('Chamado não encontrado', 404)
    }
})

export default app */

// ----------------------------------------------------------------- 

// DELETE - 

import { Hono } from "hono";

const app = new Hono()

interface Chamado {
    id: number;
    titulo: string;
    status: string
}

let chamados: Chamado[] = [
    {id: 1, titulo: "Erro ao acessar o sistema", status: "Aberto"},
    {id: 2, titulo: "Lentidão ao emitir relatório", status: "Fechado"},
    {id: 3, titulo: "Usuário não encontrado", status: "Fechado"}
]

app.delete('/chamados/:id', (c) => {
    const id = c.req.param('id')
    const index = chamados.findIndex((item) => item.id === Number(id))

    if(index !== -1) {
        chamados.splice(index, 1)
        return c.text('Chamado removido com sucesso!')
    } else {
        return c.text('Chamado não encontrado ', 404)
    }
})

export default app
