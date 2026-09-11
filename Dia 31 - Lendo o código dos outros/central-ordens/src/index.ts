import { Hono } from 'hono';
import { env } from './config/env';
import { conectar } from './config/db';
import { logger } from './middleware/logger';
import { auth } from './middleware/auth';
import { errorHandler } from './middleware/errorHandler';
import { ordensRouter } from './routes/ordens';
import { equipamentosRouter } from './routes/equipamentos';

// Ponto de entrada da aplicação. É aqui que tudo é "ligado":
// middlewares, rotas e tratamento de erro.
const app = new Hono();

// Loga toda requisição.
app.use('*', logger);

// Rota pública de "saúde" — útil para checar se o serviço está no ar.
app.get('/', (c) => c.json({ servico: 'central-ordens', status: 'ok' }));

// Tudo abaixo de /api exige API key.
app.use('/api/*', auth);
app.route('/api/ordens', ordensRouter);
app.route('/api/equipamentos', equipamentosRouter);

// Qualquer erro lançado nas rotas cai aqui.
app.onError(errorHandler);

// Conecta ao banco antes de começar a aceitar requisições.
await conectar();
console.log(`Servidor ouvindo em http://localhost:${env.porta}`);

export default {
  port: env.porta,
  fetch: app.fetch,
};
