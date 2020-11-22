const Nota = require("../models/notas.model.js");

// Cria e salva uma nota nova
exports.create = function(req, res) {
    // Valida o pedido
    if (!req.body) {
      res.status(400).send({
        message: "Conteúdo não pode estar vazio!"
      });
    }  
    // Cria Nota
    const nota = new Nota({
      titulo: req.body.titulo,
      descricao: req.body.descricao,
    });
    // Salva a nota no banco de dados
    Nota.create(nota, function(err, data) {
      if (err)
        res.status(500).send({
          message:
            err.message || "Algum erro ocorreu ao criar a nota."
        });
      else res.send(data);
    });
  };

// Lista todas as notas do banco de dados
exports.findAll = function(req, res) {
    Nota.getAll(function(err, data) {
      if (err)
        res.status(500).send({
          message:
            err.message || "Algum erro ocorreu ao tentar listar as notas."
        });
      else res.send(data);
    });
  };

// Encontra uma unica nota pelo ID
exports.findOne = function(req, res) {
    Nota.findById(req.params.notaId, function(err, data) {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Nota com id ${req.params.notaId} não encontrada.`
          });
        } else {
          res.status(500).send( {
            message: "Erro ao tentar encontrar Nota com id " + req.params.notaId} );
        }
      } else res.send(data);
    });
  };

// Faz o update da nota pelo id
exports.update = function(req, res) {
    // Valida o pedido
    if (!req.body) {
      res.status(400).send({
        message: "Conteúdo não pode estar vazio!"
      });
    }
  
    Nota.updateById(
      req.params.notaId,
      new Nota(req.body), function(err, data) {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Nota com o id ${req.params.notaId} não encontrada.`
            });
          } else {
            res.status(500).send({
              message: "Erro ao fazer o update da nota com o id " + req.params.notaId
            });
          }
        } else res.send(data);
      }
    );
  };

// Deleta uma Nota com um id especifico
exports.delete = function(req, res) {
    Nota.remove(req.params.notaId, function(err, data) {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Nota com o id ${req.params.notaId} não encontrada.`
          });
        } else {
          res.status(500).send({
            message: `Nota com o id ${req.params.notaId} não pode ser deletada.`
          });
        }
      } else res.send({ message: `Nota deletada com sucesso!` });
    });
  };

// Deleta todas as notas do banco de dados.
exports.deleteAll = function(req, res) {
    Nota.removeAll(function(err, data) {
      if (err)
        res.status(500).send({
          message:
            err.message || "Algum erro aconteceu ao tentar remover todas as notas."
        });
      else res.send({ message: `Todas as notas foram apagadas com sucesso.` });
    });
  };