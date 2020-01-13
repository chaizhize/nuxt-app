import request from '../utils/request'

// 获取用户信息
export function getUserinfo() {
  return request({
    url: 'users/user/info',
    method: 'get'
  });
}

// 登陆
export function postUserLogin(data) {
  return request({
    url: 'api/users/login',
    method: 'post',
    data: data
  });
}
