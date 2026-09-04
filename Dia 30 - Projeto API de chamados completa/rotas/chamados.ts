import { Hono } from "hono";
import { conectarBanco } from "../db";
import { ObjectId } from "mongodb";

export const chamadosRoutes = new Hono()

chamadosRoutes.post('/', async (c) => {
    const corpo = await c.req.json()

    if(!corpo.titulo) {
        return c.text('O campo "titulo" é obrigatorio', 400)
    }

    const db = await conectarBanco()
    const colecao = db.collection("chamados") // ← AQUI, dentro da rota

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

chamadosRoutes.get('/status/:status', async (c) => {
    
    const status = c.req.param('status')

    const db = await conectarBanco()
    const colecao = db.collection("chamados")

    const chamadosFiltrados = await colecao.find({status: status}).toArray()

    return c.json(chamadosFiltrados)

})

chamadosRoutes.get('/id/:id', async (c) => {
    
    const id = c.req.param('id')

    const db = await conectarBanco()
    const colecao = db.collection("chamados")

    const chamado = await colecao.findOne({_id: new ObjectId(id)})

    if(chamado) {
        return c.json(chamado)
    } else { 
        return c.text('Chamado não encontrado', 404)
    }
})

chamadosRoutes.put('/id/:id', async (c) => {

    const corpo = await c.req.json()
    const id = c.req.param('id')
    
    const db = await conectarBanco()
    const colecao = db.collection("chamados")

    await colecao.updateOne(
  { _id: new ObjectId(id) },
  { $set: { status: corpo.status } }
)

return c.text('Chamado atualizado com sucesso! ')

})

chamadosRoutes.delete('/id/:id', async (c) => {

    const id = c.req.param('id')
    

})

