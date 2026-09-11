import { equipamentosRepo } from '../repositories/equipamentos.repo';
import { NaoEncontrado } from '../domain/errors';
import type { Equipamento } from '../domain/types';

// "Service": onde ficam as regras de negócio. Chama o repositório para
// buscar/salvar e decide o que é válido.
export const equipamentosService = {
  listar() {
    return equipamentosRepo.listar();
  },

  async buscarPorId(id: string): Promise<Equipamento> {
    const eq = await equipamentosRepo.buscarPorId(id);
    if (!eq) throw new NaoEncontrado('Equipamento', id);
    return eq;
  },

  criar(dados: Omit<Equipamento, '_id'>) {
    return equipamentosRepo.criar(dados);
  },
};
