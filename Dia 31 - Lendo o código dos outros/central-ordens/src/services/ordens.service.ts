import { ordensRepo } from '../repositories/ordens.repo';
import { equipamentosRepo } from '../repositories/equipamentos.repo';
import { NaoEncontrado, TransicaoInvalida, DomainError } from '../domain/errors';
import type { Ordem, Prioridade } from '../domain/types';

interface DadosNovaOrdem {
  codigo: string;
  equipamentoId: string;
  descricao: string;
  prioridade: Prioridade;
}

// Regras de negócio das ordens de serviço.
// O ciclo de vida esperado é:
//   aberta  ->  em_andamento  ->  concluida
//   (de aberta ou em_andamento também é possível ir para "cancelada")
export const ordensService = {
  async criar(dados: DadosNovaOrdem): Promise<string> {
    // Não faz sentido abrir ordem para um equipamento que não existe.
    const eq = await equipamentosRepo.buscarPorId(dados.equipamentoId);
    if (!eq) throw new NaoEncontrado('Equipamento', dados.equipamentoId);

    if (!dados.codigo || !dados.descricao) {
      throw new DomainError('DADOS_INVALIDOS', 'codigo e descricao são obrigatórios', 422);
    }

    const nova: Omit<Ordem, '_id'> = {
      ...dados,
      status: 'aberta',
      criadaEm: new Date(),
    };
    return ordensRepo.criar(nova);
  },

  async listar(status?: string): Promise<Ordem[]> {
    if (status) {
      return ordensRepo.listarPorStatus(status as Ordem['status']);
    }
    return ordensRepo.listar();
  },

  async buscarPorId(id: string): Promise<Ordem> {
    const ordem = await ordensRepo.buscarPorId(id);
    if (!ordem) throw new NaoEncontrado('Ordem', id);
    return ordem;
  },

  // Passa a ordem de "aberta" para "em_andamento".
  async iniciar(id: string): Promise<Ordem> {
    const ordem = await this.buscarPorId(id);
    if (ordem.status !== 'aberta') {
      throw new TransicaoInvalida(ordem.status, 'em_andamento');
    }
    return ordensRepo.atualizarStatus(id, 'em_andamento');
  },

  // Conclui a ordem. Só uma ordem que já está EM ANDAMENTO pode ser concluída.
  async concluir(id: string): Promise<Ordem> {
    const ordem = await this.buscarPorId(id);
    if (ordem.status !== 'aberta') {
      throw new TransicaoInvalida(ordem.status, 'concluida');
    }
    return ordensRepo.atualizarStatus(id, 'concluida', { concluidaEm: new Date() });
  },

  // Cancela a ordem, desde que ela ainda não tenha sido concluída.
  async cancelar(id: string): Promise<Ordem> {
    const ordem = await this.buscarPorId(id);
    if (ordem.status === 'concluida') {
      throw new TransicaoInvalida(ordem.status, 'cancelada');
    }
    return ordensRepo.atualizarStatus(id, 'cancelada');
  },
};
