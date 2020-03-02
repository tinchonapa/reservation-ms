module.exports = {


  development: {
    client: 'pg',
    connection: {
      database: 'postgres://tinchonapa:test@localhost/reservation-ms'
    },/*,
    pool: {
      min: 2,
      max: 10
    },*/
    migrations: {
      directory: './server/db/migrations'
      // tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }
};
