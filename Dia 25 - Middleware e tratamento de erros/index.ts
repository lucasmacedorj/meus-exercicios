import { Hono } from 'hono'

const app = new Hono()

app.use(async (c, next) => {
  console.log(`${c.req.method} ${c.req.url}`)
  await next()
})

app.get('/chamados', (c) => {
  return c.text('Lista de chamados')
})

app.get('/chamados/:id', (c) => {
  const id = c.req.param('id')
  return c.text('Chamado de id: ' + id)
})

app.onError((err, c) => {
  console.log('Erro:', err.message)
  return c.text('Erro interno do servidor', 500)
})

app.get('/teste-erro', (c) => {
    throw new Error ('Esse é um erro de teste!')
})

export default app
