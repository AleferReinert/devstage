# DevStage

Website de inscrição e indicação para eventos.

[Layout](https://www.figma.com/community/file/1471119935944492720/nlw-connect-devstage) | [Storybook](https://main--67c3a6b77510efaa57103f96.chromatic.com)

---

Desenvolvido durante o NLW Connect da [Rocketseat](https://github.com/Rocketseat).

[Guia do evento](https://efficient-sloth-d85.notion.site/NLW-Connect-337b47bcef1640fc9a536f66dd45d8f1)

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

## Tecnologias Utilizadas

- **dotenv:** Carrega variáveis de ambiente de um arquivo `.env` para o `process.env`.
- **Husky:** Configuração de hooks Git para validações automáticas.
- **Next.js:** Framework React para apps web modernas.
- **Orval:** Gerador de clientes TypeScript a partir de especificações OpenAPI (Swagger)
- **React:** Biblioteca para criação de interfaces de usuário.
- **React Icons:** Conjunto de ícones para projetos React.
- **Storybook:** Ambiente para desenvolvimento de componentes isolados.
- **Tailwind CSS:** Framework utilitário para estilização com CSS.
- **Testing Library:** Ferramenta para testes unitários.
- **TypeScript:** Superset de JavaScript com tipagem estática.

