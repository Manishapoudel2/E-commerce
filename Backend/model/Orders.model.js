const DB = require('../config/DB');

class OrderModel{
 static async findAll() {
    const [orders] = await DB.query(`
        SELECT 
            o.order_id,
            u.fullname,
            p.title,
            p.price,
            o.quantity,
            o.status,
              o.order_date,
            (p.price * o.quantity) AS total
        FROM orders o
        JOIN user u ON o.user_id = u.id
        JOIN productdetail p ON o.product_id = p.id
    `);
    return orders;
}

    static async findByUserId(user_id) {
        const [orders] = await DB.query(`
            SELECT * FROM orders 
            JOIN user ON orders.user_id = user.id 
         JOIN productdetail p ON orders.product_id = p.id
            WHERE orders.user_id = ?
        `, [user_id]);
        return orders;
    }
static async create( order_id , user_id, product_id, quantity, status = "pending") {
    const [result] = await DB.query(`
        INSERT INTO orders ( order_id ,user_id, product_id, quantity, status)
        VALUES (?, ?, ?, ?, ?)
    `, [order_id,user_id, product_id, quantity, status]);

    return  result
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