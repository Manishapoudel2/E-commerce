const express= require('express');
require ('dotenv').config()
const cors = require("cors");

const app =express()
const ProductRoute = require('./route/Product.route');
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.use("/product",ProductRoute)
app.listen(3000,()=>{
    console.log("App is running on 3000",`localhost:3000`)
})