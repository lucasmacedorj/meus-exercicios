import { Hono } from 'hono';
import { ordensService } from '../services/ordens.service';
import { serializar } from '../domain/serializar';

export const ordensRouter = new Hono();

// GET /api/ordens?status=aberta   (o "?status=" é opcional)
ordensRouter.get('/', async (c) => {
  const status = c.req.query('status');
  const ordens = await ordensService.listar(status);
  return c.json(ordens.map(serializar));
});

// GET /api/ordens/:id
ordensRouter.get('/:id', async (c) => {
  const ordem = await ordensService.buscarPorId(c.req.param('id'));
  return c.json(serializar(ordem));
});

// POST /api/ordens
ordensRouter.post('/', async (c) => {
  const corpo = await c.req.json();
  const id = await ordensService.criar(corpo);
  return c.json({ id }, 201);
});

// Ações que mudam o status da ordem:
// POST /api/ordens/:id/iniciar
ordensRouter.post('/:id/iniciar', async (c) => {
  const ordem = await ordensService.iniciar(c.req.param('id'));
  return c.json(serializar(ordem));
});

// POST /api/ordens/:id/concluir
ordensRouter.post('/:id/concluir', async (c) => {
  const ordem = await ordensService.concluir(c.req.param('id'));
  return c.json(serializar(ordem));
});

// POST /api/ordens/:id/cancelar
ordensRouter.post('/:id/cancelar', async (c) => {
  const ordem = await ordensService.cancelar(c.req.param('id'));
  return c.json(serializar(ordem));
});
