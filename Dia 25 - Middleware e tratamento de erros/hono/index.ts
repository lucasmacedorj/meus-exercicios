import { Hono } from "hono";

const app = new Hono()

// Middleware: roda antes de qualquer rota

app.use(async(c, next) => {
    console.log(`${c.req.method} ${c.req.url}`)
    await next()
})

app.get('/chamados', (c) => {
    return c.text('Lista de chamados')
})

app.get('/chamados/:id', (c) => {
    const id = c.req.param('id')
    return c.text('Chamados de ID: ' + id)
})

// Tratamento de erro: pega qualquer coisa não prevista

app.onError((err, c) => {
    console.log('Erro capturado! ', err.message)
    return c.text('Algo deu errado na captura do erro', 500)
})

export default app