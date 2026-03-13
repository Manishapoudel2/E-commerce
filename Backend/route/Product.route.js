const express=require('express')
const ProductController = require('../controller/Product.controller')
const router = express.Router()
router.post('/',ProductController.postProduct)
router.get('/',ProductController.getProduct)
router.get('/:id',ProductController.getOneProduct)
router.put('/:id',ProductController.updateProduct)
router.delete('/:id',ProductController.deleteProduct)
module.exports=router