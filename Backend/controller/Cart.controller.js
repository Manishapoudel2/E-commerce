const CartModel = require('../model/Cart.model')
exports.getOrder=async(req,res)=>{
    const order = await CartModel.findAll()
    res.json (order)
}
exports.getOneOrder=async(req,res)=>{
    const id = req.params.id
    const order = await CartModel.findById(id)
    res.json (order)
}
exports.postOrder = async (req,res)=>{
    const {user_id,product_id,quantity} = req.body;
    const order = await CartModel.create(user_id,product_id,quantity)
    res.json(order)

}
exports.updateOrder = async(req,res)=>{
    const id = req.params.id
    const {quantity} = req.body;
    const order = await CartModel.update(id,quantity);
    res.json(order)

}
exports.deleteOrder = async(req,res)=>{
    const id = req.params.id;
    const order = await CartModel.delete(id);
    res.json(order)
}