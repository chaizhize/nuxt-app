import jwt from 'jsonwebtoken'
import {SuccessModel, ErrorModel} from '../../model/resmodel'
import login from "../../controller/users/login";

const Login = async (ctx)=>{
  const {username, password} = ctx.request.body
  const data = await login(username, password)
  if (data.username) {

    //设置session
    // ctx.session.username = data.username
    // ctx.session.realname = data.realname

    const token = jwt.sign({
      name: data.name,
      _id: data.id
    }, 'my_token', { expiresIn: '2h' });
    let result = new SuccessModel(data)

    ctx.session.token = token
    // result.data['token'] = token
    console.log(result);
    ctx.body = result
    return
  }

  ctx.body = new ErrorModel('登陆失败,用户名或密码错误')

}

export default Login
