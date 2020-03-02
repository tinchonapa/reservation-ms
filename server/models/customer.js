const knex = require('../db/connection');

module.exports = {
    createCustomer(data) {
        return knex('customers')
            .insert()
    }
}