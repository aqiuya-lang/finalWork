const dataService = require('../service/data.service')
class DataController {
  async dataList(ctx, next) {
    const result = await dataService.getdataList()
    ctx.body = {
      code: 1,
      data: result
    }
  }
  async getMoreData(ctx, next) {
    const num = ctx.request.body.num
    console.log(num)
    const result = await dataService.getMore(num)
      ctx.body = {
        code: 1,
        data: result
    }
  }
  async searchData(ctx, next) {
    const dataName = ctx.request.body.dataName
    console.log(dataName)
    const result = await dataService.searchData(dataName)
      ctx.body = {
        code: 1,
        data: result
    }
  } async deleteData(ctx, next) {
    const dataId = ctx.request.body.dataId
    console.log(dataId)
    const result = await dataService.deleteData(dataId)
      ctx.body = {
        code: 1,
        data: result
    }
  }
  
}

module.exports = new DataController()

