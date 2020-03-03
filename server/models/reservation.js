const knex = require('../db/connection');

module.exports = {
    createReservation(data) {
        return knex('reservations')
            .insert({
                customer1_id: data.customer1_id, customer2_id: data.customer2_id,
                vehicle_id: data.vehicle_id, date_in: data.date_in, 
                date_out: data.date_out, price: data.price
            }, '*')
    },
    showReservation(data) {
        return knex
            .select()
            .table('reservations')
    }
}