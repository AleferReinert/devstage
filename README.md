# DevStage

DevStage é um site responsivo de inscrição e indicação para eventos.

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

## Scripts

#### Iniciar o servidor de desenvolvimento:

```
npm run dev
```

#### Iniciar o Storybook:

```
npm run storybook
```

#### Executar os testes:

```
npm run test-storybook
```

## Material complementar

[Acesse aqui](https://efficient-sloth-d85.notion.site/NLW-Connect-337b47bcef1640fc9a536f66dd45d8f1)

## Tecnologias Utilizadas

- **dotenv:** Carrega variáveis de ambiente de um arquivo `.env` para o `process.env`.
- **Orval:** Gerador de clientes TypeScript a partir de especificações OpenAPI (Swagger)
- **React:** Biblioteca JavaScript para construir interfaces de usuário.
- **React Icons:** Conjunto de ícones para projetos React.
- **Storybook**: Ferramenta para construir e testar componentes de forma isolada.
- **Tailwind CSS:** Framework CSS baseado em utilitários.
- **Testing Library:** Ferramenta de testes unitários.
- **TypeScript:** Superset de JavaScript que adiciona tipagem estática opcional.

## URL do Projeto

Explore o projeto no link: [DevStage](https://devstage-nlw-connect.vercel.app).

## Crédito

Projeto desenvolvido durante a trilha de React do NLW Connect da [Rocketseat](https://github.com/Rocketseat).

