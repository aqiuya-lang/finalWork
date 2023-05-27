const userService = require('../service/user.service')
class UserController {
  async create(ctx, next) {
    const user = ctx.request.body
    const result = await userService.create(user)
    ctx.body = {
      code: 1,
      msg: '注册成功，欢迎使用！',
      data: result
    }
  }
  async goin(ctx, next) {
    const user = ctx.request.body
    const result = await userService.goin(user)
    if (result.length != 0){
      ctx.body = {
        code: 1,
        msg: '用户登录成功',
        data: result
      }
    }else{
      ctx.body = {
        code: 0,
        msg: '用户名或密码错误'
      }
    }
    // console.log('用户登录')
    // console.log(result)
    
  }
}

module.exports = new UserController()

