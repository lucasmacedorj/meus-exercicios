import {Hono} from 'hono'

interface Chamado {
    id: number;
    titulo: string;
    status: string
}

const chamados: Chamado[] = [
    {id: 1, titulo: "Erro ao logar", status: "Aberto"},
    {id: 2, titulo: "Sistema lento", status: "Resolvido"},
    {id: 3, titulo: "Erro ao gerar relatorio", status: "Aberto"}
]

const app = new Hono()

app.get('/chamados/:id', (c) => {
    const id = c.req.param('id')
    const chamado = chamados.find((item) => item.id === Number(id))

    if(chamado) {
        return c.json(chamado)
    } else {
        return c.text('Chamado não encontrado', 404)
    }
})

export default app