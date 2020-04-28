const express = require('express');
const router = express.Router();
const { postCustomer, getCustomer, hideCustomer } = require('../controllers/customers');

router.post('/', postCustomer);
router.get('/', getCustomer);
router.put('/:id', hideCustomer); //hide customer
// router.delete('/:id', delCustomer)
module.exports = router;