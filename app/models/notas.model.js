const sql = require("./db.js");

// Construtor
const Notas = function(notas) {
  this.titulo = notas.titulo;
  this.descricao = notas.descricao;
  this.denuncia = notas.denuncia //adicionado
};

Notas.create = function(newNota, result) {
  sql.query("INSERT INTO notas SET ?", newNota, function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("Nota criada: ", { id: res.insertId, ...newNota });
    result(null, { id: res.insertId, ...newNota });
  });
};

Notas.findById = (notaId, result) => {
  sql.query(`SELECT * FROM notas WHERE id = ${notaId}`, function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("Nota encontrada: ", res[0]);
      result(null, res[0]);
      return;
    }

    // Não achou a Nota com o Id fornecido
    result({ kind: "not_found" }, null);
  });
};

Notas.getAll = result => {
  sql.query("SELECT * FROM notas", function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Notas: ", res);
    result(null, res);
  });
};

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

Notas.remove = function(id, result) {
  sql.query("DELETE FROM notas WHERE id = ?", id, function(err, res) {
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

    console.log("deleted Notas with id: ", id);
    result(null, res);
  });
};

Notas.removeAll = result => {
  sql.query("DELETE FROM notas", function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`Notas deletadas ${res.affectedRows}`);
    result(null, res);
  });
};

module.exports = Notas;