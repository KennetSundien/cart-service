const express = require('express')
var router = express()
const controller = require('../controller/carts')
const bodyparser = require('body-parser');
router.use(bodyparser.json())

router.get('/', controller.list);
router.get('/:id', controller.single);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.remove);

module.exports = router;