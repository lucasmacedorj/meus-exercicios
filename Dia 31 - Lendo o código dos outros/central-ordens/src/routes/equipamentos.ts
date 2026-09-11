import { Hono } from 'hono';
import { equipamentosService } from '../services/equipamentos.service';
import { serializar } from '../domain/serializar';

// Define as rotas (URLs) de equipamentos. Cada rota só lê o que veio da
// requisição, chama o service e devolve a resposta em JSON.
export const equipamentosRouter = new Hono();

// GET /api/equipamentos
equipamentosRouter.get('/', async (c) => {
  const lista = await equipamentosService.listar();
  return c.json(lista.map(serializar));
});

// GET /api/equipamentos/:id
equipamentosRouter.get('/:id', async (c) => {
  const eq = await equipamentosService.buscarPorId(c.req.param('id'));
  return c.json(serializar(eq));
});

// POST /api/equipamentos
equipamentosRouter.post('/', async (c) => {
  const corpo = await c.req.json();
  const id = await equipamentosService.criar(corpo);
  return c.json({ id }, 201);
});
