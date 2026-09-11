import type { ErrorHandler } from 'hono';
import { DomainError } from '../domain/errors';

// Ponto único de tratamento de erro. Se for um erro de negócio conhecido
// (DomainError), devolve a mensagem e o status certos. Qualquer outra coisa
// é um erro inesperado: logamos e devolvemos 500 sem vazar detalhes internos.
export const errorHandler: ErrorHandler = (err, c) => {
  if (err instanceof DomainError) {
    return c.json({ erro: err.codigo, mensagem: err.message }, err.status);
  }
  console.error('Erro inesperado:', err);
  return c.json({ erro: 'ERRO_INTERNO', mensagem: 'Algo deu errado' }, 500);
};
