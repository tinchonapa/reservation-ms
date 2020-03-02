const knex = require('../db/connection');

module.exports = {
    createCustomer(data) {
        return knex('customers')
            .insert({
                fName: data.fName, lName: data.lName, dob: data.dob,
                dlN: data.dlN, dlCountry: data.dlCountry, dlState: data.dlState,
                dlExp: data.dlExp
                }, '*')
    }
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