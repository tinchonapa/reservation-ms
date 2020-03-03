const express = require('express');
const router = express.Router();
const { postVehicle, getVehicle } = require('../controllers/vehicles');

router.post('/', postVehicle);
router.get('/', getVehicle);

module.exports = router;