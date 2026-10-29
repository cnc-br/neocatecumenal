import Endereco from "./Endereco";
import PessoaConjugue from "./PessoaConjugue";
import SituacaoReligiosa from "../Configuracao/SituacaoReligiosa";
import { Carisma } from "../Configuracao";
import Comunidade from "./Comunidade";
import PessoaContato from "./PessoaContato";

export default interface Pessoa {
  id: number;
  externalId: string;
  nome: string;
  conhecidoPor?: string;
  cpf: string;
  sexo: string;
  nacionalidade: string;
  dataNascimento: Date;
  foto?: string;
  ativo: boolean;
  estadoCivil: string;
  escolaridade: string;
  enderecos?: Endereco[];
  conjugue?: PessoaConjugue;
  contatos?: PessoaContato[];
  situacaoReligiosa: SituacaoReligiosa;
  carismas?: Carisma[];
  comunidade?: Comunidade;
}
