import { Paroquia, Pessoa } from "../Caminho";

export default interface User {
  id: string;
  email: string;
  role: string;
  whatsapp: string;
  pessoaId?: number;
  pessoa?: Pessoa;
  paroquias: Paroquia[];
  verifiedWhatsapp: boolean;
  active: boolean;
  createdAt: Date;
}
