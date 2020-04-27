const express = require('express');
const router = express.Router();
const { postVehicle, getVehicle, hideVehicle } = require('../controllers/vehicles');

router.post('/', postVehicle);
router.get('/', getVehicle);
router.put('/:id', hideVehicle); // hide vehicle
// router.delete('/:vId');

module.exports = router;