const express = require('express');
const router = express.Router();
const { postReservation, getReservation, hideReservation, editReservation} = require('../controllers/reservations');

router.post('/', postReservation);
router.get('/', getReservation);
router.put('/:id', hideReservation);
router.put('/edit/:id', editReservation);

module.exports = router;