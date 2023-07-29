# Styles

## Organização dos estilos

Os estilos da aplicação podem ser utilizados para definir estilos globais da aplicação ou estilos de componentes.

### Estilos globais

Os estilos globais da aplicação são definidos no arquivo `src/styles.scss` e outros arquivos configurados
no `angular.json`.
Nele você colocar todos os estilos globais da aplicação, como, por exemplo, estilos de fontes, cores, classes
utilitárias, etc.

Você também pode sobrescrever estilos de componentes de terceiros, como, por exemplo, o Bootstrap.

### Estilos de componentes

Os estilos de componentes são definidos no arquivo que por padrão está no mesmo diretório do componente, com o mesmo
nome do componente e com a extensão `.scss`.
As classes definidas nesses arquivos são utilizadas apenas no componente em que o arquivo está definido. Por exemplo, se
você definir uma classe `.btn` no arquivo `src/app/shared/components/button/button.component.scss`, essa classe será
utilizada apenas no componente `ButtonComponent`.

Se o seu componente for um componente molecular e possuir outros componentes atômicos, as classes definidas no arquivo
de estilos do componente não afetará os componentes atômicos internamente.

## Variáveis

As variáveis da aplicação podem ser definidas no arquivo `src/styles/_variables.scss`. Nesse arquivo você pode definir
variaveis que serão utlizadas em momento de compilação, como por exemplo, cores, fontes, etc.
Uma vez definida uma variável sass o seu valor não pode ser alterado em tempo de execução. Para esses casos dê
preferência para utilizar variáveis css `--variavel: valor`.

## Classes utilitárias

As classes utilitárias da aplicação podem ser definidas no arquivo `src/styles/_utilities.scss`. Nesse arquivo você pode
definir classes que serão utilizadas em vários lugares da aplicação, como, por exemplo, classes para definir cores,
espaçamentos, etc.

# Criação de estilos

- Antes de começar a criar os estilos da aplicação, é importante analisar todos os componentes que serão criados e definir
quais serão os componentes atômicos e quais serão os componentes moleculares. Com essa análise você poderá definir os
estilos globais da aplicação e os estilos de cada componente.

- Faça uma análise também dos componentes de terceiros que serão utilizados na aplicação e veja se é necessário
sobrescrever
algum estilo deles.

- Anote todas as cores, fontes, espaçamentos, etc, que serão utilizados na aplicação e defina as variáveis sass no
arquivo. Com essas variáveis definidas você poderá utilizar elas em qualquer lugar da aplicação e criar classes utilitárias com as mesmas. 
Algumas bibliotecas de componentes já possuem variáveis sass definidas, como, por exemplo, o Bootstrap.
