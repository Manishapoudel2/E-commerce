const express= require('express');
require ('dotenv').config()
const cors = require("cors");

const app =express()
const ProductRoute = require('./route/Product.route');
const UserRoute = require('./route/User.route')
const CartRoute = require('./route/Cart.route')
const OrderRoute = require('./route/Orders.route')
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.use("/product",ProductRoute)
app.use('/user',UserRoute)
app.use('/cart',CartRoute)
app.use('/orders',OrderRoute)
app.listen(3000,()=>{
    console.log("App is running on 3000",`localhost:3000`)
   
})