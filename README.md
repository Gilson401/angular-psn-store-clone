# Store

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 14.1.2.
É o desafio do curso Bootcamp Santander 2023 Angular + Java 

Principais adições :
 - Responsividade;
 - Página de detalhes do jogo;
 - Refatoração da página home;
 - Consumo de api via mock de api com json server;
 - Refatoração do menu-bar para adaptação da responsividade;
 - Inserção de elementos SVG.

## Instruções para rodar o projeto

Tenha instalada em sua máquina a versão mais recente do Angular
Faça um clone do projeto.
Instale as dependências com npm install

Este projeto usa um mock de servidor com o [Json Server](https://www.npmjs.com/package/json-server). Sendo assim é necessário instalar esta dependência de forma global e executar o comando 
```terminal
json-server --watch mock/games.json
```


Execute  `ng serve` Para servir a aplicação. Navegue até  `http://localhost:4200/`. 
