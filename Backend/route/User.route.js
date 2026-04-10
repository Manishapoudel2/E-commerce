const express = require ('express')
const UserController = require('../controller/User.controller')
const verifyToken = require('../Middleware/AuthMiddleware')
const router =express.Router()
router.post('/signup',UserController.createUser)
router.get('/', verifyToken,UserController.getUser)
router.get('/:id',UserController.getOneuser)
router.post('/signin',UserController.loginUser)
module.exports=router