const express = require('express')
const  OrderController = require('../controller/Orders.controller')
const router = express.Router()
router.get('/',OrderController.getOrder);
router.get('/user/:id',OrderController.getByUser);
router.post('/',OrderController.postOrder);
router.delete('/:id',OrderController.deleteOrder);
router.put('/:id', OrderController.updateOrderStatus);

module.exports = router;