const app = require('../app/app')
const { NAME_OR_PASSWORD_IS_REQUIRED, NAME_IS_ALREADY_EXISTS } = require('../config/error')



app.on('error', (error,ctx) => {
  let code = 0
  let msg = ''
  switch (error) {
    case NAME_OR_PASSWORD_IS_REQUIRED:
      code = -1001
      msg = '用户名或密码不能为空'
      break
    case NAME_IS_ALREADY_EXISTS:
      code = -1002
      msg = '用户名已经被占用，请输入新的用户名'
  }
  ctx.body = {code, msg}
})