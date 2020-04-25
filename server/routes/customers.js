const express = require('express');
const router = express.Router();
const { postCustomer, getCustomer, delCustomer } = require('../controllers/customers');

router.post('/', postCustomer);
router.get('/', getCustomer);
router.put('/:id', delCustomer);
// router.delete('/:id', purgeCustomer)
module.exports = router;