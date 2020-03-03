const express = require('express');
const router = express.Router();
const { postReservation, getReservation} = require('../controllers/reservations');

router.post('/', postReservation);
router.get('/', getReservation);

module.exports = router;