# API_backend

Trabalho destinado a matéria de POO-Avançado, onde desenvolvemos uma api em nodeJS e MySql para gerenciamento de tarefas. Ele usa um banco de dados na nuvem que já está startado então não precisa ter instalado de fato o MySql instalado na maquina apenas o Workbanch se quiser ter acesso ao banco para verificar se foi salvo os dados no banco, as conexoes se encontram no arquivo app/config/db.config.js, os dados vão estar na tabela é denominada "notas".

Como Usar:

1- Ter instalado no computador o [nodejs](https://nodejs.org/en/download/) v12.19.0.

2- Clonar o projeto: git clone https://github.com/JeronimoDalPiazze/API_backend.git

3- Usando o terminal acessar a pasta app.

4- Rodar o comando "npm install express@4.17.1 mysql@2.18.1 body-parser@1.19.0 --save" para instalar as dependências de maneira não global com a flag "--save".

5- Após isso é só rodar o comando "node server.js" na pasta app/ para rodar o projeto na porta 3000.

Será necessário ter instalado [postman](https://www.postman.com/downloads/) para fazer as chamadas da api.

Consultar o [swagger](https://editor.swagger.io/) para ver as rotas e parametros.

Para Visualizar o swagger é necessário entrar nesse link acima, após isso precisa abrir o projeto copiar todo conteúdo do arquivo swagger.json e colar la no swagger, e será gerada a tabela do swagger automaticamente.
