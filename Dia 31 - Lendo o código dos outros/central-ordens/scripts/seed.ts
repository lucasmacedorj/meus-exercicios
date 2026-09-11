// Popula o banco com alguns dados de exemplo para você poder testar.
// Rode com:  bun run seed
import { ObjectId } from 'mongodb';
import { conectar } from '../src/config/db';

const db = await conectar();

// Limpa antes, para poder rodar o seed várias vezes sem duplicar.
await db.collection('equipamentos').deleteMany({});
await db.collection('ordens').deleteMany({});

const bomba = new ObjectId();
const compressor = new ObjectId();

await db.collection('equipamentos').insertMany([
  { _id: bomba, tag: 'BMB-01', nome: 'Bomba centrífuga', setor: 'Bombeamento', ativo: true },
  { _id: compressor, tag: 'CMP-03', nome: 'Compressor de ar', setor: 'Utilidades', ativo: true },
]);

await db.collection('ordens').insertMany([
  {
    codigo: 'OS-1001',
    equipamentoId: bomba.toString(),
    descricao: 'Troca de selo mecânico',
    status: 'aberta',
    prioridade: 'alta',
    criadaEm: new Date(),
  },
  {
    codigo: 'OS-1002',
    equipamentoId: compressor.toString(),
    descricao: 'Revisão preventiva',
    status: 'em_andamento',
    prioridade: 'media',
    criadaEm: new Date(),
  },
]);

console.log('Seed concluído: 2 equipamentos e 2 ordens criados.');
process.exit(0);
