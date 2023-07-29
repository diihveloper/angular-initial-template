# Diretictves (Diretivas)

Diretivas são classes que adicionam comportamentos a elementos DOM existentes ou que criam componentes reutilizáveis para serem usados em toda a aplicação.

## Diretivas de atributo

Diretivas de atributo alteram a aparência ou o comportamento de um elemento, componente ou outra diretiva. Por exemplo, a diretiva `ngStyle` altera a aparência e a diretiva `ngClass` altera a aparência.
Diretivas de atributo também podem ser usadas como componentes personalizados. Por exemplo, a diretiva `ngModel` é usada como um componente personalizado para vincular dados de entrada a uma propriedade de um componente.
Outro uso comum de diretivas é marcar um elemento para que um componente pai possa selecioná-lo.

## Diretivas estruturais

[Diretivas estruturais](https://angular.io/guide/structural-directives) alteram o layout adicionando e removendo elementos DOM. Por exemplo, a diretiva `*ngIf` adiciona ou remove um elemento DOM com base em uma expressão booleana.
Um outro exemplo pode ser a criação de uma diretiva que verifica se o usuário atual tem permissão para acessar ou visualizar um determinado elemento.

### Criando uma nova diretiva

Para criar uma nova diretiva de atributo, basta executar o comando `ng g d [nome-da-diretiva]` ou `ng g d [nome-da-diretiva] --module [modulo-pai]`.





