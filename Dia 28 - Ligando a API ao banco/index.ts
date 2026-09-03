import { Hono } from "hono";
import { chamadosRoutes } from "./routes/chamados";

const app = new Hono()

app.route('/chamados', chamadosRoutes)

export default app