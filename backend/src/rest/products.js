var express = require('express');
var router = express.Router();
var products = require('../service/').products;

router.get('/', products.list);
router.get('/:id', products.findById);
router.post('/', products.create);
router.delete('/:id', products.delete);
router.put('/:id', products.update);
module.exports = router;

