const knex = require('../db/connection');

module.exports = {
    createReservation(data) {
        return knex('reservations')
            .insert({
                customer1_id: data.customer1_id, customer2_id: data.customer2_id,
                vehicle_id: data.vehicle_id, date_in: data.date_in, 
                date_out: data.date_out, price: data.price, show: true
            }, '*')
    },/*
    showReservation(data) {
        return knex
            .select()
            .table('reservations')
            .where({
                show: true
            })
    },*/
    showReservation(data) {
        return knex('reservations AS r')
            .select(
                'r.id AS reservation_id', 
                'c1.id AS c1_id',
                'c1.first_name AS c1_first',
                'c1.last_name AS c1_lastname',
                'c2.id AS c2_id',
                'c2.first_name AS c2_first',
                'c2.last_name AS c2_lastname',
                'r.vehicle_id',
                'r.date_in',
                'r.date_out',
                'r.price',
                'r.show'
                )
            .leftJoin('customers AS c1', 'c1.id', 'r.customer1_id')
            .leftJoin('customers AS c2', 'c2.id', 'r.customer2_id')
            .where(
                'r.show', '=', true
            )
    },
    hideReservation(id, showValue) {
        return knex('reservations')
            .where('id', id)
            .update({
                show: showValue
            },
            ['id', 'customer1_id', 'customer2_id', 'vehicle_id', 'date_in', 'date_out'])
    },
    editReservation(id, data) {
        return('reservations')
        .where('id', id)
        .update({
            customer1_id: data.customer1_id, customer2_id: data.customer2_id,
            vehicle_id: data.vehicle_id, date_in: data.date_in, 
            date_out: data.date_out, price: data.price, show: data.show
        },
        ['id', 'date_in', 'date_out', 'vehicle_id'])
    },
    purgeReservation(id) {
        return knex('reservations')
            .where('id', id)
            .del()
    }
}