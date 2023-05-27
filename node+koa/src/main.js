const app = require('./app/app')
require('./util/handle-error')
app.listen(9000, () => {
  console.log('服务器搭建成功')
}) 