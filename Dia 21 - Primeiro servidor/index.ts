import {Hono} from 'hono'

const app = new Hono()

app.get('/', (c) => {
    return c.text('JESUS É BOM O TEMPO TODO')
})

export default app 