const knex = require('../db/connection');

module.exports = {
    createCustomer(data) {
        return knex('customers')
            .insert({
                first_name: data.first_name, last_name: data.last_name, dob: data.dob,
                dl_number: data.dl_number, dl_country: data.dl_country, 
                dl_state: data.dl_state, dl_exp: data.dl_exp, show: true
                }, '*')
    },
    showCustomers(data) {
        return knex
            .select()
            .table('customers')
            .where({
                show: true
            })
    },
    hideCustomer(dl_number, showValue) {
        return knex('customers')
            .where('dl_number', dl_number)
            .update({
                show: showValue
            },
            ['dl_number', 'first_name', 'last_name', 'show'])
    },
    deleteCustomer(dl_number) {
        return knex('customers')
            .where('dl_number', dl_number)
            .del()
    }
}