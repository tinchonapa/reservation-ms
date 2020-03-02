exports.up = function(knex) {
    return knex.schema.createTable('customers', (table) => { 
        table.increments('id').primary();
        table.string('fName').notNullable();
        table.string('lName').notNullable();
        table.string('dob').notNullable();
        table.string('dlN').notNullable();
        table.string('dlCountry').notNullable();
        table.string('dlState').notNullable();
        table.string('dlExp').notNullable();
    })
  };
  
  exports.down = function(knex) {
      return knex.schema
      .dropTable('customers')  
  };