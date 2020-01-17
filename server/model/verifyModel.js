import Redis from 'koa-redis'
import {ErrorModel} from '../model/resmodel'
const Store = new Redis().client


module.exports = async (ctx, next) => {
  const cok = ctx.cookies.get('mt')
  const result = await Store.get('mt:uid'+cok)
  const result2 = JSON.parse(result)
  if (result2) {
    await next()
    return
  }
  ctx.body = new ErrorModel('未登陆！')

}
