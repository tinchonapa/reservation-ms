const express = require('express');
const router = express.Router();
const { postCustomer, getCustomer } = require('../controllers/customers');

router.post('/', postCustomer);
router.get('/', getCustomer);

module.exports = router;