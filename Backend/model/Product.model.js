const DB = require('../config/DB')
class ProductModel{
    static async findAll(){
        const [product]=await DB.query(`select * from productdetail`)
        return product
    }
    static async findOneProduct(id){
        const [product] = await DB.query(`select * from productdetail where id=${id}`)
        return product
    }
    static async create(title,description,category,price,rating,imageurl){
        const [product]=await DB.query(`insert into productdetail (title,description,category,price,rating,imageurl)  value(?,?,?,?,?,?)`,[title,description,category,price,rating,imageurl])
        return product
    }
    static async update(id,title,description,category,price,rating,imageurl){
        const [product]=await DB.query(`update productdetail set title=?,description=?, category=?, price=?,rating=?,imageurl=? where id=${id}`,[title,description,category,price,rating,imageurl])
        return product
    }
    static async delete (id){
        const [product]=await DB.query(`delete from productdetail where id=${id}`)
        return product
    }
}
module.exports=ProductModel;