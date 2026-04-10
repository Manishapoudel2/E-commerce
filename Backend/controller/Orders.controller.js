const OrderModel = require("../model/Orders.model");
exports.getOrder = async (req, res) => {
  const orders = await OrderModel.findAll();
    res.json(orders);
};
exports.getByUser = async (req, res) => {
  const id = req.params.id;
    const orders = await OrderModel.findByUserId(id);
    res.json(orders);
};
exports.postOrder = async (req, res) => {
    
        const { user_id, product_id, quantity, status } = req.body;
        const order = await OrderModel.create(user_id, product_id, quantity, status);
        res.json(order);
    
};
exports.deleteOrder = async (req, res) => {
  const id = req.params.id;
  const order = await OrderModel.delete(id);
  res.json(order);
};
exports.updateOrderStatus = async(req,res)=>{
    const order_id = req.params.id;
    const {status} = req.body;
    const result = await OrderModel.updateStatus(order_id, status);
    res.json(result);
}

