
const DB = require('../config/DB');
class CartModel{
    static async findAll(){
       const [product] = await DB.query(`select * from cart  join user
         on cart.user_id=user.id join productdetail p on cart.product_id=p.id`) 
       return product
    }
    static async findById(user_id) {
        const [product] = await DB.query(`
            SELECT * FROM cart 
            JOIN user ON cart.user_id = user.id 
            JOIN productdetail p ON cart.product_id = p.id 
            WHERE cart.user_id =?
        `, [user_id]);
        return product;
    }
    static async create(user_id,product_id,quantity){
        const [product] = await DB.query(`INSERT INTO cart (user_id,product_id,quantity) VALUE(?,?,?)`,[user_id,product_id,quantity])
        return product
    }
  static async update(cart_id,  quantity) {
        const [result] = await DB.query(
            `UPDATE cart 
             SET  quantity = ? 
             WHERE cart_id = ?`,
            [quantity, cart_id]
        );
        return result;
    }

 static async delete(cart_id) {
        const [result] = await DB.query(
            `DELETE FROM cart WHERE cart_id = ?`,
            [cart_id]
        );
        return result;
    }
}

module.exports = CartModel;