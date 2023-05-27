const connection = require('../app/database')

class UserService {
  
  async create(user) {
    const {userName, password} = user
    console.log('将user对象保存到数据库')
    const statement = `insert into user (userName, password) values (${userName}, ${password});`
    const [result] = await connection.execute(statement)
    return result
  }
  async goin(user) {
    const {userName, password} = user
    const statement = 'select * from user where userName = ? and password = ?;'
    const [result] = await connection.execute(statement, [userName, password])
    return result
  }
  async findUserByName(name) {
    const statement = 'select * from user where userName = ?;'
    const [values] = await connection.execute(statement, [name])
    return values
  }
}
module.exports = new UserService()


