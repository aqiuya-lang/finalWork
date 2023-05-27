const KoaRouter = require('@koa/router')
const dataController = require('../controller/data.controller')
// const {verifyUser,handlePassword} = require('../middleware/user.middle')

const dataRouter = new KoaRouter({prefix: '/data'})
// dataRouter.get('/list', (ctx, next) => {
//   ctx.body = 'user list'
// })
dataRouter.get('/getdataList', dataController.dataList)
dataRouter.post('/getMoreData', dataController.getMoreData)
dataRouter.post('/searchData', dataController.searchData)
dataRouter.post('/deleteData', dataController.deleteData)
module.exports = dataRouter