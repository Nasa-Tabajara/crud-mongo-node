const Cliente = require('../models/f1_piloto');

exports.pilotos_lista = (req, res, next) => {

    const piloto = new Piloto({});

    cliente.save(err => {
        if (err)
            return next(new Error(`Ocorreu um erro: ${err}`));
        res.send('Cliente cadastrado com sucesso!!!');
    });
}
