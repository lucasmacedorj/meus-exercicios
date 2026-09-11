// Códigos de status HTTP que os erros de domínio podem usar.
export type StatusErro = 400 | 401 | 404 | 409 | 422 | 500;

// Erro "esperado" de regra de negócio. O errorHandler transforma isso
// em uma resposta HTTP limpa, em vez de um 500 genérico.
export class DomainError extends Error {
  constructor(
    public readonly codigo: string,
    message: string,
    public readonly status: StatusErro = 400,
  ) {
    super(message);
    this.name = 'DomainError';
  }
}

export class NaoEncontrado extends DomainError {
  constructor(recurso: string, id: string) {
    super('NAO_ENCONTRADO', `${recurso} ${id} não encontrado`, 404);
  }
}

export class TransicaoInvalida extends DomainError {
  constructor(de: string, para: string) {
    super('TRANSICAO_INVALIDA', `Não é possível mudar de "${de}" para "${para}"`, 409);
  }
}
