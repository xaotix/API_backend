const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Analisa solicitações de tipo de conteúdo: application/json
app.use(bodyParser.json());

// Analisa solicitações de tipo de conteúdo: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Rota simples
app.get("/", function(req, res) {
  res.json({ message: "notas" });
});

require("./routes/notas.routes.js")(app);

// Define porta que ouve os pedidos
app.listen(3000, function(req, res) {
  console.log("Server is running on port 3000.");
});