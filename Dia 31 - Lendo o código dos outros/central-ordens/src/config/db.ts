import { MongoClient, type Db } from 'mongodb';
import { env } from './env';

// Guardamos uma única conexão e a reaproveitamos (padrão "singleton").
// Abrir uma conexão nova por requisição seria lento e caro.
let db: Db | null = null;

export async function conectar(): Promise<Db> {
  if (db) return db;
  const client = new MongoClient(env.mongoUri);
  await client.connect();
  db = client.db(env.mongoDb);
  console.log(`Conectado ao MongoDB (${env.mongoDb})`);
  return db;
}

export function getDb(): Db {
  if (!db) {
    throw new Error('Banco não conectado. Chame conectar() antes de usar getDb().');
  }
  return db;
}
