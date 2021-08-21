const express = require('express');
const mongoose = require('mongoose');
const app = express();

const cliente = require('./routes/cliente');
const fornecedor = require('./routes/fornecedor');

mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://localhost:27017/comercio',
    { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, `Erro na conexão ao MongoDB`));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/clientes', cliente);
app.use('/fornecedores', fornecedor);

const port = 3000;

app.listen(port, () => {
    console.log(`Servidor iniciado com sucesso na porta: ${port}`);
});
