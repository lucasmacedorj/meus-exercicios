import { ObjectId } from 'mongodb';
import { getDb } from '../config/db';
import type { Ordem, StatusOrdem } from '../domain/types';

const colecao = () => getDb().collection<Ordem>('ordens');

export const ordensRepo = {
  listar() {
    return colecao().find().sort({ criadaEm: -1 }).toArray();
  },

  listarPorStatus(status: StatusOrdem) {
    return colecao().find({ status }).sort({ criadaEm: -1 }).toArray();
  },

  buscarPorId(id: string) {
    return colecao().findOne({ _id: new ObjectId(id) });
  },

  async criar(dados: Omit<Ordem, '_id'>) {
    const res = await colecao().insertOne(dados);
    return res.insertedId.toString();
  },

  // Atualiza o status e devolve a ordem já atualizada.
  async atualizarStatus(id: string, status: StatusOrdem, extra: Partial<Ordem> = {}) {
    await colecao().updateOne(
      { _id: new ObjectId(id) },
      { $set: { status, ...extra } },
    );
    const atualizada = await colecao().findOne({ _id: new ObjectId(id) });
    return atualizada!;
  },
};
