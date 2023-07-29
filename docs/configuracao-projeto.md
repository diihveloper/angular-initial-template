# Configuração do projeto

## Instalação das dependências

Para instalar as dependências do projeto, execute o comando `npm install` ou `yarn` caso tenha instalado.

## Configuração do angular.json

O arquivo `angular.json` é responsável por armazenar as configurações do projeto. Nele você pode configurar o nome do
projeto, o diretório de saída dos arquivos compilados, o diretório de saída dos arquivos de teste, etc.
Existe algumas configurações que são importantes e que devem ser observadas:

`projects.initial-template.architect.build.options.styles` - Nesta propriedade você pode adicionar os arquivos de estilo
global.

`projects.initial-template.architect.build.options.stylePreprocessorOptions.includePaths` - Nesta propriedade você pode
adicionar os diretórios que serão utilizados para importar arquivos de estilo. Foi adicionado o diretório `src/styles`
para que o Angular possa encontrar os arquivos de estilo globais e `node_modules` para que o Angular possa encontrar os
arquivos de estilo dos pacotes instalados.

`projects.initial-template.architect.build.options.assets` - Nesta propriedade você pode adicionar os diretórios que
serão copiados para o diretório de saída dos arquivos compilados. Por padrão, o diretório `src/assets` já está
configurado.

`projects.initial-template.architect.build.options.scripts` - Nesta propriedade você pode adicionar os arquivos de
script global.

## Configuração do tsconfig.json

O arquivo `tsconfig.json` é responsável por armazenar as configurações do compilador do TypeScript. Nele você pode
configurar o diretório de saída dos arquivos compilados, o diretório de saída dos arquivos de teste, etc.

`compilerOptions.paths` - Nesta propriedade você pode adicionar os aliases que serão utilizados para importar arquivos
TypeScript. Por padrão, o alias `@app` já está configurado para que o Angular possa encontrar os arquivos TypeScript da
aplicação.

Isso é útil para evitar que você precise utilizar caminhos relativos para importar arquivos TypeScript. Por exemplo, ao
invés de utilizar `import { AppComponent } from '../../../app.component'`, você pode
utilizar `import { AppComponent } from '@app/app.component'`.

### Adicionar o alias `@app` para que o Angular possa encontrar os arquivos TypeScript da aplicação.

```json lines
{
  // outras configurações...
  "compilerOptions": {
    // outras configurações...
    "paths": {
      "@app/*": [
        "src/app/*"
      ]
    }
  },
  // outras configurações...
}
```
