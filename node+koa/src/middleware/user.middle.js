const {NAME_IS_ALREADY_EXISTS, NAME_OR_PASSWORD_IS_REQUIRED} = require('../config/error.js')

const userService = require('../service/user.service')
const md5password = require('../util/md5-password.js')

const verifyUser = async(ctx, next) => {
  const { userName, password } = ctx.request.body
  console.log(userName)
  if (!userName || !password) {
    return ctx.app.emit('error', NAME_OR_PASSWORD_IS_REQUIRED, ctx)
  }
  const users = await userService.findUserByName(userName)
  if (users.length) {
    return ctx.app.emit('error', NAME_IS_ALREADY_EXISTS, ctx)
  }
  await next()
}
const handlePassword = async(ctx, next) => {
  const {password} = ctx.request.body
  ctx.request.body.password = md5password(password)
  await next()
}
module.exports = {
  verifyUser,
  handlePassword
}