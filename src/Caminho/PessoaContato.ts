export default interface PessoaContato {
  id: number;
  pessoaId: number;
  tipoTelefone: string;
  telefone: string;
  email?: string;
  observacao?: string;
  contatoPrincipal: boolean;
}
