import ComunidadeCarisma from "./ComunidadeCarisma";
import ComunidadeEtapa from "./ComunidadeEtapa";
import Etapa from "./Etapa";
import Paroquia from "./Paroquia";

export default interface Comunidade {
  id: number;
  numeroDaComunidade: number;
  quantidadeMembros: number;
  paroquia: Paroquia;
  etapaAtual: Etapa;
  comunidadeEtapas: ComunidadeEtapa[];
  observacao?: string;
  carismas?: ComunidadeCarisma[];
}
