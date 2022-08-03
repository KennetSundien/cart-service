const express = require('express')
var router = express()
const controller = require('../controller/carts')
const bodyparser = require('body-parser');
router.use(bodyparser.json())

router.get('/', controller.list);
router.get('/:cartId', controller.single);
router.post('/', controller.create);
router.put('/:cartId', controller.update);
router.put('/:cartId/update-item', controller.updateItem);
router.delete('/:cartId', controller.remove);
router.delete('/:cartId/remove-item/:productId', controller.removeItem);

module.exports = router;