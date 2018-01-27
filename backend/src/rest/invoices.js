var express = require('express');
var router = express.Router();
var invoices = require('../service/').invoices;

router.get('/', invoices.list);
router.get('/:id', invoices.findById);
router.post('/', invoices.create);
router.delete('/:id', invoices.delete);
router.put('/:id', invoices.update);
module.exports = router;