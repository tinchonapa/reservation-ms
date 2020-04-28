exports.up = function(knex) {
    return knex.schema.createTable('customers', (table) => { 
        table.increments('id').primary();
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.string('dob').notNullable();
        table.string('dl_number').notNullable();
        table.string('dl_country').notNullable();
        table.string('dl_state').notNullable();
        table.string('dl_exp').notNullable();
        table.boolean('show').notNullable();
    })
  };
  
  exports.down = function(knex) {
      return knex.schema
      .dropTable('customers')  
  };