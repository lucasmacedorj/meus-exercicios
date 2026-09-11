import { ObjectId } from 'mongodb';
import { getDb } from '../config/db';
import type { Equipamento } from '../domain/types';

// "Repositório": a única camada que fala diretamente com o banco.
// O resto do sistema pede dados aqui e não precisa saber que é MongoDB.
const colecao = () => getDb().collection<Equipamento>('equipamentos');

export const equipamentosRepo = {
  listar() {
    return colecao().find().toArray();
  },

  buscarPorId(id: string) {
    return colecao().findOne({ _id: new ObjectId(id) });
  },

  async criar(dados: Omit<Equipamento, '_id'>) {
    const res = await colecao().insertOne(dados);
    return res.insertedId.toString();
  },
};
