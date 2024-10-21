// app.js

const express = require('express');
const app = express();
const port = 3000;

// Rota simples para testar o servidor
app.get('/', (req, res) => {
  res.send('Servidor Node.js está funcionando!');
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
