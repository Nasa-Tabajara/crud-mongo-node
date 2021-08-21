const mongoose = require('mongoose');
Schema = mongoose.Schema;

const FornecedorSchema = new Schema({
    _id: { type: Number, required: true },
    nome: { type: String, required: true, max: 100 },
    telefone: { type: String },
    email: { type: String, required: true },
    endereco: { type: String, required: true }
}, { collection: 'fornecedor' });

module.exports = mongoose.model('Fornecedor', FornecedorSchema);
