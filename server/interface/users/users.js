import Router from 'koa-router'
import Redis from 'koa-redis'
import nodeMailer from 'nodemailer'

import axios from '../../utils/axios'

let router = new Router({
  prefix:'/api/users'
})
let Store = new Redis().client

router.post('/register',async (ctx)=>{
  const {
    username,
    password,
    email,
    code
  } = ctx.request.body
  if(code){
    const saveCode = await Store.hget(`nodemail:${username}`,'code')
    const saveExpire = await Store.hget(`nodemail:${username}`,'expire')
    if(code === saveCode){
      if(new Date().getTime() - saveExpire > 0){
        ctx.body = {
          code:-1,
          msg:'验证码已过期'
        }
        return false
      }
    }else {
      ctx.body = {
        code:-1,
        msg:'请填写正确验证码'
      }
      return false
    }
  }else {
    ctx.body = {
      code:-1,
      msg:'请填写验证码'
    }
    return false
  }
  // let user = await
})
export default router
