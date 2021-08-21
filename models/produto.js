const mongoose = require('mongoose');
Schema = mongoose.Schema;

const ProdutoSchema = new Schema({
    id_fornecedor: {type: String, required: true},
    nome: {type: String, required: true},
    preco: {type: Number, required: true},
    fabricante: {type: String, required: true, maxlength: 100},
    descricao: {type: String, required: true, maxlength: 200},
    quantidade_estoque: {type: Number, required: true}
}, { collection: 'produto' });

module.exports = mongoose.model('Produto', ProdutoSchema);
