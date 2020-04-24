exports.up = function(knex) {
    return knex.schema.createTable('reservations', (table) => { 
        table.increments('id').primary();
        table.integer('customer1_id').unsigned().index().references('id').inTable('customers').onDelete('CASCADE');
        table.integer('customer2_id').unsigned().index().references('id').inTable('customers').onDelete('CASCADE');
        table.string('vehicle_id').unsigned().index().references('vId').inTable('vehicles').onDelete('CASCADE');
        table.string('date_in').notNullable();
        table.string('date_out').notNullable();
        table.integer('price').notNullable();
        table.boolean('show').notNullable();
    })
  };
  
exports.down = function(knex) {
    return knex.schema
    .dropTable('reservations')  
};