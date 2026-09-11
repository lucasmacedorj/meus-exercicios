import type { ObjectId } from 'mongodb';

export type StatusOrdem = 'aberta' | 'em_andamento' | 'concluida' | 'cancelada';
export type Prioridade = 'baixa' | 'media' | 'alta';

// Uma ordem de serviço de manutenção em um equipamento.
export interface Ordem {
  _id?: ObjectId;
  codigo: string;          // ex: "OS-1001"
  equipamentoId: string;   // referência ao equipamento
  descricao: string;
  status: StatusOrdem;
  prioridade: Prioridade;
  criadaEm: Date;
  concluidaEm?: Date;
}

export interface Equipamento {
  _id?: ObjectId;
  tag: string;             // ex: "BMB-01"
  nome: string;
  setor: string;
  ativo: boolean;
}
