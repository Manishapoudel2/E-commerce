const DB= require ('../config/DB')
class UserModel {
    static async findAll(){
        const [data]= await DB.query(`select * from user`)
        return data
    }
    static async findOne(id){
        const [data] = await DB.query(`select * from user where id=${id}`)
        return data

    }
    static async create(fullname,email,password){
        const [data] = await DB.query(`insert into user (fullname,email,password) values(?,?,?)`,[fullname,email,password])
        return data
    }
    static async delete(id){
       
const [data] = await DB.query(`delete from user where id=${id}`)
return data
    }
 static async findByEmail(email) {
    const [data] = await DB.query(
        "SELECT * FROM user WHERE email = ?", 
        [email] 
    );
    return data;
}
}
module.exports=UserModel