const model = require('../models/customer');

const postCustomer = (req, res, next) => {
    console.log('this is customer post', req.body)
    const customer = req.body;
    const fName = req.body.fName;
    const lName = req.body.lName;
    console.log('this is the name ', fName, lName);
}

const getCustomer = (req, res, next) => {
    console.log('params for customer ', req.params);
}

module.exports = {
    postCustomer,
    getCustomer
}