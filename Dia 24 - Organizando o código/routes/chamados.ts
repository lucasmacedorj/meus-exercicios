import { Hono } from "hono";
import { chamados } from "../data/chamados";
import type { Chamado } from "../types/chamado";

export const chamadosRoutes = new Hono()

chamadosRoutes.get('/', (c) => {
    return c.json(chamados)
})

chamadosRoutes.get('/:id', (c) => {
    const id = c.req.param('id')
    const chamado = chamados.find((item) => item.id === Number(id))

    if(chamado) {
        return c.json(chamado)
    } else {
        return c.text('Chamado não encontrado', 404)
    }
})

chamadosRoutes.post('/:id', async (c) => {
    const id = c.req.param('id')
    const corpo = await c.req.json()
    const chamado = chamados.find((item) => item.id === Number(id))

    if (chamado) {
        chamado.status = corpo.status
        return c.json(chamado)
    } else {
        return c.text('Chamado não encontrado ', 404)
    }
})

chamadosRoutes.put('/:id', async (c) => {
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

chamadosRoutes.delete('/:id', (c) => {
    const id = c.req.param('id')
    const index = chamados.findIndex((item) => item.id === Number(id))

    if(index !== -1) {
        chamados.splice(index,1)
        return c.text('Chamados deletado com sucesso! ')
    }else {
        return c.text('Chamados não encontrado ', 404)
    }
})