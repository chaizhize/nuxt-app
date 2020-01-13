import {SuccessModel, ErrorModel} from '../../model/resmodel'
import login from "../../controller/users/login";

const Login = async (ctx)=>{
  const {username, password} = ctx.request.body
  const data = await login(username, password)
  if (data.username) {
    //设置session
    ctx.session.username = data.username
    ctx.session.realname = data.realname

    ctx.body = new SuccessModel(data)
    return
  }

  ctx.body = new ErrorModel('登陆失败,用户名或密码错误')

}

export default Login
