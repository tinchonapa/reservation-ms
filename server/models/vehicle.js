const knex = require('../db/connection');

module.exports = {
    createVehicle(data) {
        return knex('vehicles')
            .insert({
                vId: data.vId, year: data.year, make: data.make, model: data.model,
                vin: data.vin, color: data.color, miles: data.miles
            }, '*')
    },
    showVehicle(data) {
        return knex
            .select()
            .table('vehicles')
    }
}   