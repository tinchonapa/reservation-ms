const express = require('express');
const app = express();
const customers = require('./server/routes/customers.js');
const vehicles = require('./server/routes/vehicles.js');
const reservations = require('./server/routes/reservations');

app.use(express.json());
app.use(express.static(__dirname + '/client/dist'));

// routes
app.use('/api/customers', customers);
app.use('/api/vehicles', vehicles);
app.use('/api/reservations', reservations);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => { console.log(`server running on PORT: ${PORT}`)});