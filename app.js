const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');

const cliente = require('./routes/cliente');
const fornecedor = require('./routes/fornecedor');
const venda = require('./routes/venda');
const produto = require('./routes/produto');


mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://localhost:27017/comercio',
    { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, `Erro na conexão ao MongoDB`));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/clientes', cliente);
app.use('/fornecedores', fornecedor);
app.use('/vendas', venda);
app.use('/produtos', produto);

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/comercio/clientes', function(req, res) {
    res.sendFile(path.join(__dirname, '/crudCliente.html'));
}); 

app.get('/comercio/fornecedores', function(req, res) {
    res.sendFile(path.join(__dirname, '/crudFornecedores.html'));
}); 

app.get('/comercio/produtos', function(req, res) {
    res.sendFile(path.join(__dirname, '/crudProdutos.html'));
}); 

app.get('/comercio/vendas', function(req, res) {
    res.sendFile(path.join(__dirname, '/crudVendas.html'));
});

app.get('/comercio/clientes/create', function(req, res) {
    res.sendFile(path.join(__dirname, './ecommerce/crudCliente/cadastro.html'));
});

app.get('/comercio/clientes/update', function(req, res) {
    res.sendFile(path.join(__dirname, './ecommerce/crudCliente/atualiza.html'));
});

app.get('/comercio/clientes/delete', function(req, res) {
    res.sendFile(path.join(__dirname, './ecommerce/crudCliente/remove.html'));
});

app.get('/comercio/clientes/details', function(req, res) {
    res.sendFile(path.join(__dirname, './ecommerce/crudCliente/consulta.html'));
});

const port = 3000;

app.listen(port, () => {
    console.log(`Servidor iniciado com sucesso na porta: ${port}`);
});
