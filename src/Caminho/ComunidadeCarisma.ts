import { TipoCarismaEnum } from "../Commons/Enums";

export default interface ComunidadeCarisma {
  id: number;
  descricao: string;
  tipo: TipoCarismaEnum;
  pessoas: [{
    id: number;
    externalId: string;
    nome: string;
    casal: boolean;
    conjugue?: {
      id: number;
      nome: string;
      externalId: string;
    }
  }]
}