import { Hono } from "hono";
import { chamadosRoutes } from "./rotas/chamados";

const app = new Hono()

app.use(async (c, next) => {
    console.log(`${c.req.method} ${c.req.url}`)
    await next()
})

app.route('/chamados', chamadosRoutes)

app.onError((err, c) => {
    console.log('Erro:', err.message)
    return c.text('Erro interno do servidor', 500)
})

export default app