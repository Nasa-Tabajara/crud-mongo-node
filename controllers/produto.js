const Produto = require('../models/produto');

exports.test = (req, res) => res.send('Teste realizado com sucesso!');

exports.produto_create = (req, res, next) => {
    const produto = new Produto({
        id_fornecedor: req.body.id_fornecedor,
        nome: req.body.nome,
        preco: req.body.preco,
        fabricante: req.body.fabricante,
        descricao: req.body.descricao,
        quantidade_estoque: req.body.quantidade_estoque
    });

    produto.save(err => {
        if (err)
            return next(new Error(`Ocorreu um erro: ${err}`));
        res.send('Produto cadastrado com sucesso!!!');
    });
}

exports.produto_details = (req, res, next) => {
    Produto.findById(req.params.id, (err, produto) => {
        if (err)
            return next(new Error(`Ocorreu um erro: ${err}`));
        res.send(produto);
    });
}

exports.produto_update = (req, res, next) => {
    Produto.findByIdAndUpdate(req.params.id, {$set: req.body},
        (err, produto) => {
            if (err)
                return next(new Error(`Ocorreu um erro: ${err}`));
            res.send('Produto alterado!');
    })
}

exports.produto_delete = (req, res, next) => {
    Produto.findByIdAndDelete(req.params.id, (err => {
        if (err)
            return next(new Error(`Ocorreu um erro: ${err}`));
        res.send('Produto excluído!');
    }))
}
