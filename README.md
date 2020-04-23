# reservation-ms
A reservation management system for rental car companies

It works with a relational db, with full CRUD habilities. Although as a design preference I chose for records on each table to have an extra column called 'isDeleted' which each cell contain a boolean value. This is to hide from users records that they decided to delete, but still hold the other information that might be useful. For example the usage of the vehicle or the money generated.