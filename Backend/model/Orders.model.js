const DB = require('../config/DB');

class OrderModel{
    static async findAll() {
        const [orders] = await DB.query(`
            SELECT * FROM orders 
            JOIN user ON orders.user_id = user.id 
            LEFT JOIN productdetail p ON orders.product_id = p.id
        `);
        return orders;
    }

    static async findByUserId(user_id) {
        const [orders] = await DB.query(`
            SELECT * FROM orders 
            JOIN user ON orders.user_id = user.id 
            LEFT JOIN productdetail p ON orders.product_id = p.id
            WHERE orders.user_id = ?
        `, [user_id]);
        return orders;
    }

static async create(user_id, product_id, quantity, status){

    const [orders] = await DB.query(`
        INSERT INTO orders (user_id, product_id, quantity, status)
        VALUES (?, ?, ?, ?)
    `, [user_id, product_id, quantity, status]);
    return orders;
}

    static async delete(order_id){
        const [order]= await DB.query(`DELETE FROM orders WHERE order_id = ?`, [order_id]);
        return order;
    }

    static async updateStatus(order_id, status){
        const [result] = await DB.query(
            `UPDATE orders SET status = ? WHERE order_id = ?`,
            [status, order_id]
        );
        return result;
    }
} 

module.exports = OrderModel;