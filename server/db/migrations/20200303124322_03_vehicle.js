exports.up = function(knex) {
    return knex.schema.createTable('vehicles', (table) => { 
        table.increments('id').primary();
        table.string('vId').unique().notNullable();
        table.integer('year').notNullable();
        table.string('make').notNullable();
        table.string('model').notNullable();
        table.string('vin').notNullable();
        table.string('color').notNullable();
        table.integer('miles').notNullable();
    })
  };
  
  exports.down = function(knex) {
      return knex.schema
      .dropTable('vehicles')  
  };