const mongoose = require('mongoose');
Schema = mongoose.Schema;

const VendaSchema = new Schema({
    id_fornecedor: {type: String, required: true},
    id_cliente: {type: String, required: true},
    quantidade: {type: Number, required: true},
    preco: {type: Number, required: true},
    data_venda: {type: String, required: true}
    // TODO colocar o campo virtual do total
}, { collection: 'venda' });

module.exports = mongoose.model('Venda', VendaSchema);
