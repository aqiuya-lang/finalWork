const connection = require('../app/database')

class DataService {
  async getdataList() {
    const statement = 'SELECT * from dataDesc limit 0, 3;'
    const [result] = await connection.execute(statement)
    return result
  }
  async getMore(num) {
    const statement = `select * from datadesc limit 0, ${num};`
    const [result] = await connection.execute(statement)
    return result
  }
  async searchData(dataName) {
 
    console.log(dataName)
    const statement = `select * from dataDesc where dataName = '${dataName}';`
    const [result] = await connection.execute(statement)
    return result
  }
  async deleteData(dataId) {
    console.log(dataId)
    const statement = `delete from dataDesc where dataId = ${dataId};`
    const [result] = await connection.execute(statement)
    return result
  }
  // async findUserByName(name) {
  //   const statement = 'select * from user where userName = ?;'
  //   const [values] = await connection.execute(statement, [name])
  //   return values
  // }
}
module.exports = new DataService()


