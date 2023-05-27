const Koa = require('koa')
const bodyparser = require('koa-bodyparser')
const userRouter = require('../route/user.router')
const dataRouter = require('../route/data.router')
const app = new Koa()
app.use(bodyparser())
// app.use((ctx, next) => {
//   ctx.msg = 'aaa'
//   next()
//   // 返回结果
//   ctx.body = ctx.msg
// })
// app.use(userRouter.routes())
app.use(dataRouter.routes())
// app.use(userRouter.allowedMethods())
app.use(dataRouter.allowedMethods())
module.exports = app

