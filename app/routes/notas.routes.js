module.exports = app => {
    const nota = require("../controllers/notas.controller.js");
  
    // Cria nova nota
    app.post("/tarefa/add-nota", nota.create);
  
    // Recupera toas as notas
    app.get("/tarefa/get-nota", nota.findAll);
  
    // Recupera uma nota especifica com id fornecido
    app.get("/tarefa/get-nota/:notaId", nota.findOne);
  
    // Faz update da nota com Id especifico
    app.put("/tarefa/put-nota/:notaId", nota.update);
  
    // Deleta a nota com Id especifico
    app.delete("/tarefa/delete-nota/:notaId", nota.delete);
  
    // Deleta todas as notas
    app.delete("/tarefa/delete-nota", nota.deleteAll);
  };