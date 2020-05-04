const express = require('express');
const router = express.Router();
const { postVehicle, getVehicle, hideVehicle, editVehicle } = require('../controllers/vehicles');

router.post('/', postVehicle);
router.get('/', getVehicle);
router.put('/:id', hideVehicle); // hide vehicle
router.put('/edit/:id', editVehicle)
// router.delete('/:vId');

module.exports = router;