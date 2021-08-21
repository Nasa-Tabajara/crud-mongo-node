const Venda = require('../models/venda');

exports.test = (req, res) => res.send('Teste realizado com sucesso!');

exports.venda_create = (req, res, next) => {
    const venda = new Venda({
        id_fornecedor: req.body.id_fornecedor,
        id_cliente: req.body.id_cliente,
        quantidade: req.body.quantidade,
        preco: req.body.preco,
        data_venda: Date.now().toString
    });

    venda.save(err => {
        if (err)
            return next(new Error(`Ocorreu um erro: ${err}`));
        res.send('Venda cadastrada com sucesso!!!');
    });
}

exports.venda_details = (req, res, next) => {
    Venda.findById(req.params.id, (err, venda) => {
        if (err)
            return next(new Error(`Ocorreu um erro: ${err}`));
        res.send(venda);
    });
}

exports.venda_update = (req, res, next) => {
    Venda.findByIdAndUpdate(req.params.id, {$set: req.body},
        (err, venda) => {
            if (err)
                return next(new Error(`Ocorreu um erro: ${err}`));
            res.send('Venda alterada!');
    })
}

exports.venda_delete = (req, res, next) => {
    Venda.findByIdAndDelete(req.params.id, (err => {
        if (err)
            return next(new Error(`Ocorreu um erro: ${err}`));
        res.send('Venda excluída!');
    }))
}
