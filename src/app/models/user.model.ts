export interface User {
  nome: string;
  cpf: string;
  situacaoCadastral: string;
  contaAplicacao: {
    cooperativa: string;
    numeroConta: string;
  };
  contaCorrente: {
    cooperativa: string;
    numeroConta: string;
  };
}
