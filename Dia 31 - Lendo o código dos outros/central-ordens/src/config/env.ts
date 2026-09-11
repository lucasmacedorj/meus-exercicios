// Lê as configurações das variáveis de ambiente (arquivo .env).
// Se faltar uma variável obrigatória, o app falha logo na inicialização
// em vez de quebrar mais tarde, no meio de uma requisição.

function obrigatoria(nome: string): string {
  const valor = process.env[nome];
  if (!valor) {
    throw new Error(`Variável de ambiente ausente: ${nome}`);
  }
  return valor;
}

export const env = {
  porta: Number(process.env.PORT ?? 3000),
  mongoUri: obrigatoria('MONGO_URI'),
  mongoDb: process.env.MONGO_DB ?? 'central_ordens',
  apiKey: obrigatoria('API_KEY'),
};
