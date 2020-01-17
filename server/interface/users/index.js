import Router from 'koa-router'
import Login from './login'
import axios from '../../utils/axios'
import loginCheck from '../../model/verifyModel'

import {ErrorModel, SuccessModel} from "../../model/resmodel";
let router = new Router({
  prefix:'/api/users'
})
router.post('/login',Login)










router.get('/getData',loginCheck,async (ctx)=>{

  // const result = await axios.get('https://www.bitdata.pro/api/indexservice/getCarousel')
  // console.log(result,'resultresult');
  // ctx.status = 500
  // console.log(ctx.request.header.cookie,'ctxctxctxctx');
  // console.log(ctx.cookies.get('mt'),'ctxctxctxctx');

  ctx.body = {
    code:200,
    data:{
      data:123
    },

  }

})
router.get('/getData2',async (ctx)=>{

  const result = await axios.get('https://www.bitdata.pro/api/newsservice/getList?lang=zh-CN&type=237fb19abddbee099d4feb9dd596f51a&pageNum=1&limit=100')
  // console.log(result,'resultresult');
  ctx.body = {
    code:200,
    data:result.data.data.result
  }

})


export default router
