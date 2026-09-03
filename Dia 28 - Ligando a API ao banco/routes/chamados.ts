import { Hono } from "hono";
import { conectarBanco } from "../db";
import { ExitStatus } from "typescript";

export const chamadosRoutes = new Hono()

chamadosRoutes.post('/', async (c) => {
    const corpo = await c.req.json()

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