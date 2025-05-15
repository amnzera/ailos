# Projeto Angular - Consulta de CPF

Este projeto implementa uma aplicação Angular para consulta de CPF com validação e exibição de dados do usuário, seguindo as especificações e layouts apresentados.

## Funcionalidades

1. **Tela de Consulta de CPF:**
  - Formulário para inserção do CPF
  - Validação de CPF (formato e dígitos verificadores)
  - Use CPF (497.479.310-10) para avançar
  - Exibição de mensagem de erro para CPF inválido
  - Navegação para a segunda tela quando o CPF é válido

2. **Tela de Detalhes do Usuário:**
  - Exibição dos dados do usuário encontrado
  - Informações de cadastro
  - Dados de conta aplicação
  - Dados de conta corrente
  - Botão para iniciar nova admissão

3. **Componentes Reutilizáveis:**
  - Progress Stepper - indica o progresso do processo de admissão
  - Layout compartilhado com sidebar de navegação

## Estrutura do Projeto

O projeto está organizado em:

- **Componentes**: Elementos de interface reutilizáveis
- **Serviços**: Lógica de negócio para validação de CPF e gerenciamento de dados do usuário
- **Modelos**: Interfaces TypeScript que definem a estrutura dos dados
- **Estilos**: SCSS para estilização dos componentes

## Tecnologias Utilizadas

- Angular 14+
- TypeScript
- RxJS para gerenciamento de estado
- Angular Reactive Forms para validação de formulários
- SCSS para estilos
- Angular Router para navegação entre telas

## Como rodar o projeto

1. Certifique-se de ter o Node.js e o Angular CLI instalados
2. Clone o repositório
3. Execute `npm install` para instalar as dependências
4. Execute `ng serve` para iniciar o servidor de desenvolvimento
5. Acesse `http://localhost:4200/` no navegador

## Credenciais de Teste

Para testar a aplicação, use o CPF: `497.479.310-10`

## Critérios de Avaliação

Conforme especificado no desafio, a avaliação considerará:
- Qualidade do código fonte
- Interface
- Funcionamento da aplicação
- Estrutura de arquivos
