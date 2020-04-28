const model = require('../models/customer');

const postCustomer = (req, res, next) => {
    model.createCustomer(req.body)
        .then( data => {
            console.log('this customer has been added', data);
            res.status(200).json({});
        })
        .catch(error => {
            console.log(error);
            res.status(400).send(error);
        });
}

const getCustomer = (req, res, next) => {
    model.showCustomers()
        .then(customers => {
            console.log('This are customers ', customers)
            res.status(200).json(customers)
        })
        .catch(error => {
            console.log(error);
            res.status(400).send(error)
        });
}

const hideCustomer = (req, res, next) => {
    console.log('Customer about to be hiden ', req.params.id, ' show is ', req.body)
    model.hideCustomer(req.params.id, req.body.show)
        .then((data) => {
            console.log('this customer has been hidden from user ', data);
            res.status(200).json({})
        })
        .catch(error => {
            console.log(error);
            res.status(400).send(error)
        });
}

module.exports = {
    postCustomer,
    getCustomer,
    hideCustomer
}
