const model = require('../models/customer');

const postCustomer = (req, res, next) => {
    console.log('this is customer post', req.body)
    const customer = req.body;
    const fName = req.body.fName;
    const lName = req.body.lName;
    console.log('this is the name ', fName, lName);
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
    console.log('params for customer ', req.params);
}

module.exports = {
    postCustomer,
    getCustomer
}
/*
fName: '',
lName: '',
dob: '',
dlN: '',
dlCountry: '',
dlState: '',
dlExp: ''
*/