const Fornecedor = require('../models/fornecedor');

exports.test = (req, res) => res.send('Teste realizado com sucesso!');

exports.fornecedor_create = (req, res, next) => {
    const fornecedor = new Fornecedor({
        _id: parseInt(req.body.id),
        nome: req.body.nome,
        telefone: req.body.telefone,
        email: req.body.email,
        endereco: req.body.endereco
    });

    fornecedor.save(err => {
        if (err)
            return next(new Error(`Ocorreu um erro: ${err}`));
        res.send('Fornecedor cadastrado com sucesso!!!');
    });
}

exports.fornecedor_details = (req, res, next) => {
    Fornecedor.findById(req.params.id, (err, fornecedor) => {
        if (err)
            return next(new Error(`Ocorreu um erro: ${err}`));
        res.send(fornecedor);
    });
}

exports.fornecedor_update = (req, res, next) => {
    Fornecedor.findByIdAndUpdate(req.params.id, {$set: req.body},
        (err, fornecedor) => {
            if (err)
                return next(new Error(`Ocorreu um erro: ${err}`));
            res.send('Fornecedor alterado!');
    })
}

exports.fornecedor_delete = (req, res, next) => {
    Fornecedor.findByIdAndDelete(req.params.id, (err => {
        if (err)
            return next(new Error(`Ocorreu um erro: ${err}`));
        res.send('Fornecedor excluído!');
    }))
}
