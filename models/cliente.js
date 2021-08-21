const mongoose = require('mongoose');
Schema = mongoose.Schema;

const ClienteSchema = new Schema({
    _id: { type: Number, required: true },
    nome: { type: String, required: true, max: 100 },
    telefone: { type: String },
    email: { type: String, required: true }
}, { collection: 'cliente' });

module.exports = mongoose.model('Cliente', ClienteSchema);
