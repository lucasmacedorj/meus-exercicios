import type { MiddlewareHandler } from 'hono';

// Middleware: roda em TODA requisição. Mede quanto tempo levou e imprime
// no console. "await next()" é o ponto em que a requisição segue para a
// rota de verdade; o código depois dele roda quando a resposta já está pronta.
export const logger: MiddlewareHandler = async (c, next) => {
  const inicio = Date.now();
  await next();
  const duracao = Date.now() - inicio;
  console.log(`${c.req.method} ${c.req.path} -> ${c.res.status} (${duracao}ms)`);
};
