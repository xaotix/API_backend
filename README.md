# API_backend

## De que se trata o software 

Linguagem: javascript

Framework: node.js

Banco de dados: MySQL

Design Patterns Usados: MVC

Para que serve: é uma API RestFull em node.JS. Serve para comandos CRUD num banco de dados que administra uma tabela de notas.

## Documentação disponibilizada

## O que seu grupo alterou, como alterou, foi fácil? A estrutura já implementada incorporou isso com facilidade?

Foi fácil de implementar. Apenas algumas alterações. A estrutura atual incorporou a alteração de forma simples e sem problemas.

### Alterada a tabela “notas”: adicionado campo “denuncia”
`mysql
CREATE TABLE IF NOT EXISTS `notas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) NOT NULL,
  `descricao` varchar(255) NOT NULL,
  `denuncia` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
`

### b)	Adicionada propriedade “denuncia” no código:

``javascript
// app\models\notas.model.js - Linha 03 :
const Notas = function(notas) {
  this.titulo = notas.titulo;
  this.descricao = notas.descricao;
  this.denuncia = notas.denuncia //adicionado
};
``
...

``javascript

// app\models\notas.model.js - Linha 55 :
Notas.updateById = (id, notas, result) => {
  sql.query(
    "UPDATE notas SET titulo = ?, descricao = ?, denuncia = ?  WHERE id = ?",
    [notas.titulo, notas.descricao, notas.denuncia, id], //adicionado
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // Não achou a Nota com o Id fornecido
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("Nota(s) atualizada(s): ", { id: id, ...Notas });
      result(null, { id: id, ...Notas });
    }
  );
};

``



# Documentação Original:
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
