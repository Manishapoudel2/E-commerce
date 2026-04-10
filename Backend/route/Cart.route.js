const express = require('express')
const  CartController = require('../controller/Cart.controller')
const router = express.Router()
router.get('/',CartController.getOrder);
router.get('/user/:id',CartController.getOneOrder);
router.post('/',CartController.postOrder);
router.put('/:id',CartController.updateOrder)
router.delete('/:id',CartController.deleteOrder)
module.exports=router