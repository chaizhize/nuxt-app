

// 获取用户信息
export function getUserinfo() {
  return request({
    url: 'users/user/info',
    method: 'get'
  });
}

// 登陆
// export function postUserLogin(data) {
//   return request({
//     url: 'api/users/login',
//     method: 'post',
//     data: data
//   });
// }
// 登陆
export async function postUserLogin(data) {
  console.log(data,'postUserLoginpostUserLogin');
  console.log($axios,'2222222');
   return this.$axios.$post('api/users/login',data).then(res=>{
     console.log(res,'reeeeeeeeeeeee');
   })
}
