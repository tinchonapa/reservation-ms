const knex = require('../db/connection');

module.exports = {
    createCustomer(data) {
        return knex('customers')
            .insert({
                fName: data.fName, lName: data.lName, dob: data.dob,
                dlN: data.dlN, dlCountry: data.dlCountry, dlState: data.dlState,
                dlExp: data.dlExp
                }, '*')
    },
    showCustomers(data) {
        return knex
            .select()
            .table('customers')
    },
    deleteCustomer(dlN) {
        return knex('customers')
            .where('dlN', dlN)
            .del()
    }
}