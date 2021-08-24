const mongoose = require('mongoose');
Schema = mongoose.Schema;

const PilotoSchema = new Schema({
    nome: { type: String, required: true, max: 100 },
    nome_abreviado: { type: String, required: true, max: 3 },
    wiki: { type: String },
    numero: { type: Number, required: true }
}, { collection: 'f1_piloto' });

module.exports = mongoose.model('Piloto', PilotoSchema);
