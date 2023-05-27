const KoaRouter = require('@koa/router')
const userController = require('../controller/user.controller')
const {verifyUser,handlePassword} = require('../middleware/user.middle')

const userRouter = new KoaRouter({prefix: '/user'})
// userRouter.get('/list', (ctx, next) => {
//   ctx.body = 'user list'
// })
userRouter.post('/login', userController.goin)
userRouter.post('/register',verifyUser,handlePassword, userController.create)
module.exports = userRouter