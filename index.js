const express = require('express');
const app = express();


app.use(express.static(__dirname + '/../client/dist'));


// routes
// customers routes
app.get('/api/customers', (req, res) => {

});

app.post('/api/customers', (req, res) => {

});

// vehicles routes
app.get('/api/vehicles', (req, res) => {

});

app.post('/api/vehicles', (req, res) => {

});

// reservations routes
app.get('/api/reservations', (req,res) => {

});

app.post('/api/reservations', (req, res) => {

});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => { console.log(`server running on PORT: ${PORT}`)});