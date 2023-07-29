# Páginas

Páginas são componentes que são carregados através de rotas, e são exibidos no `<router-outlet></router-outlet>` do
componente `app.component.html`.

## Criando uma nova página

Para criar uma nova página, basta executar o
comando `ng g m [nome-do-modulo] --routing --route [path] --module [modulo-pai]`.

Exemplo: `ng g m pages/configuracoes --routing --route configuracoes --module app`

Após isso, será criado um novo módulo com o nome `configuracoes.module.ts` e um arquivo de
rotas `configuracoes-routing.module.ts`.
O comando também irá adicionar a rota `configuracoes` no módulo `app.module.ts` e importar o
módulo `ConfiguracoesModule` no módulo `AppModule`.
