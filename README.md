# DevStage

Website de inscrição e indicação para eventos.

Desenvolvido durante a trilha de React do NLW Connect da [Rocketseat](https://github.com/Rocketseat).

## Começando

1. Clone o repositório:

   ```
   git clone https://github.com/AleferReinert/devstage.git
   ```

2. Instale as dependências:

   ```
   npm i
   ```

3. Defina as variáveis de ambiente como em `.env.example`.
4. Com a api rodando, gere o cliente typescript a partir das especificações do Swagger:

   ```
   npm run orval
   ```

## Scripts disponíveis

| Script                   | Descrição                            |
| :----------------------- | :----------------------------------- |
| `npm run dev`            | Inicia o servidor de desenvolvimento |
| `npm run storybook`      | Inicia o Storybook                   |
| `npx tsc`                | Validação de TypeScript              |
| `npm run lint`           | Validação do Next.js                 |
| `npm run test-storybook` | Executa testes unitários             |

## Material complementar

[Acesse aqui](https://efficient-sloth-d85.notion.site/NLW-Connect-337b47bcef1640fc9a536f66dd45d8f1)

## Tecnologias Utilizadas

- **dotenv:** Carrega variáveis de ambiente de um arquivo `.env` para o `process.env`.
- **Husky:** Configuração de hooks Git para validações automáticas.
- **Orval:** Gerador de clientes TypeScript a partir de especificações OpenAPI (Swagger)
- **Next.js:** Framework React para apps web modernas.
- **React:** Biblioteca para criação de interfaces de usuário.
- **React Icons:** Conjunto de ícones para projetos React.
- **Storybook:** Ambiente para desenvolvimento de componentes isolados.
- **Tailwind CSS:** Framework utilitário para estilização com CSS.
- **Testing Library:** Ferramenta para testes unitários.
- **TypeScript:** Superset de JavaScript com tipagem estática.

## Links

Deploy: [devstage-nlw-connect.vercel.app](https://devstage-nlw-connect.vercel.app)

Storybook: [Visualizar no Chromatic](https://main--67c3a6b77510efaa57103f96.chromatic.com/)

