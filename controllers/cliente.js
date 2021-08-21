const Cliente = require('../models/cliente');

exports.test = (req, res) => res.send('Teste realizado com sucesso!');

exports.cliente_create = (req, res, next) => {
    const cliente = new Cliente({
        _id: parseInt(req.body.id),
        nome: req.body.nome,
        telefone: req.body.telefone,
        email: req.body.email
    });

    cliente.save(err => {
        if (err)
            return next(new Error(`Ocorreu um erro: ${err}`));
        res.send('Cliente cadastrado com sucesso!!!');
    });
}

exports.cliente_details = (req, res, next) => {
    Cliente.findById(Number(req.query.id), (err, cliente) => {
        if (err)
            return next(new Error(`Ocorreu um erro: ${err}`));
        res.send(cliente);                  
    });
}

exports.cliente_update = (req, res, next) => {
    Cliente.findOneAndUpdate(Number(req.query.id), {$set: req.body},
        (err, cliente) => {
            if (err)
                return next(new Error(`Ocorreu um erro: ${err}`));
            res.send(`Cliente ${cliente} alterado!`);
    })
}

exports.cliente_delete = (req, res, next) => {
    Cliente.findByIdAndDelete(req.body.id, (err => {
        if (err)
            return next(new Error(`Ocorreu um erro: ${err}`));
        res.send('Cliente excluído!');
    }))
}
