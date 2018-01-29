var express = require('express');
var router = express.Router();
var locations = require('../service/').locations;

router.get('/', locations.list);
router.get('/:id', locations.findById);
router.post('/', locations.create);
router.delete('/:id', locations.delete);
router.put('/:id', locations.update);
module.exports = router;