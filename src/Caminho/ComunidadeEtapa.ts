import Equipe from "./Equipe";
import Etapa from "./Etapa";

export default interface ComunidadeEtapa {
  id: number;
  comunidadeId: number;
  etapa: Etapa;
  equipe?: Equipe;
  dataInicio?: Date;
  localConvivencia?: string;
  observacao?: string;
  createdAt: Date;
  updatedAt: Date;
}
