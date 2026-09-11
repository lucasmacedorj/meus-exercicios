import type { MiddlewareHandler } from 'hono';
import { env } from '../config/env';

// Autenticação simples por API key no header "x-api-key".
// (Em um sistema real isso seria bem mais robusto — tokens, expiração etc.)
// Se a chave não bater, corta a requisição aqui com 401 e nem chama next().
export const auth: MiddlewareHandler = async (c, next) => {
  const chave = c.req.header('x-api-key');
  if (chave !== env.apiKey) {
    return c.json(
      { erro: 'NAO_AUTORIZADO', mensagem: 'API key inválida ou ausente' },
      401,
    );
  }
  await next();
};
