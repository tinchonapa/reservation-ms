const express = require('express');
const router = express.Router();
const { postReservation, getReservation, hideReservation} = require('../controllers/reservations');

router.post('/', postReservation);
router.get('/', getReservation);
router.put('/:id', hideReservation);

module.exports = router;