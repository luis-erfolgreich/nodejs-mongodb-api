require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Conectar ao MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.log(err));

// Rota simples
app.get('/', (req, res) => {
  res.send('Servidor rodando!');
});

// Porta
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
