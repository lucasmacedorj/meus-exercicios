import { Hono } from "hono";
import { conectarBanco } from "../db";
import { ExitStatus } from "typescript";

export const chamadosRoutes = new Hono()

chamadosRoutes.post('/', async (c) => {
    const corpo = await c.req.json()

    if(!corpo.titulo) {
        return c.text('O campo "título" é obrigatório', 400)
    }

    const db = await conectarBanco()
    const colecao = db.collection("chamados")

    const resultado = await colecao.insertOne({
        titulo: corpo.titulo,
        status: "Aberto"
    })

    return c.json({
        id: resultado.insertedId,
        titulo: corpo.titulo,
        status: "Aberto"
    }, 201)

})

chamadosRoutes.get('/', async (c) => {
        const db = await conectarBanco()
        const colecao = db.collection("chamados")

        const chamados = await colecao.find().toArray()

        return c.json(chamados)
    })

chamadosRoutes.get('/status/:status', async (c) => {
    const status = c.req.param('status')

    const db = await conectarBanco()
    const colecao = db.collection("chamados")

    const chamadosFiltrados = await colecao.find({status: status}).toArray()

    return c.json(chamadosFiltrados)
    
})    