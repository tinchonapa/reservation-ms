exports.up = function(knex) {
    return knex.schema.createTable('reservations', (table) => { 
        table.increments('id').primary();
        table.integer('customer1_id').unsigned().index().references('id').inTable('customers');
        table.integer('customer2_id').unsigned().index().references('id').inTable('customers');
        table.string('vehicle_id').unsigned().index().references('vId').inTable('vehicles');
        table.string('date_in').notNullable();
        table.string('date_out').notNullable();
        table.integer('price').notNullable();
    })
  };
  
  exports.down = function(knex) {
      return knex.schema
      .dropTable('reservations')  
  };